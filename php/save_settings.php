<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
require_once __DIR__ . '/seo_sync.php';

// Simple password protection
$secret = $_POST['secret'] ?? '';
if ($secret !== 'amg_admin_2025') {
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

$data    = $_POST['data'] ?? '';
$decoded = json_decode($data, true);
if (!$decoded) {
    echo json_encode(['success' => false, 'message' => 'Invalid data']);
    exit;
}

// Write to a JSON file on the server
$dir = __DIR__ . '/../data/';
if (!is_dir($dir)) mkdir($dir, 0755, true);

$result = file_put_contents(
    $dir . 'settings.json',
    json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    LOCK_EX
);
$seo = $decoded['seoSettings'] ?? [];
$rootDir = realpath(__DIR__ . '/..');
$indexSynced = sync_seo_into_html(__DIR__ . '/../index.html', $seo);
$careersSynced = sync_seo_into_html(__DIR__ . '/../careers.html', $seo);
$sitemapResults = sync_sitemap_files($rootDir, $seo);

echo json_encode([
    'success' => $result !== false && $indexSynced && $careersSynced && $sitemapResults['sitemapSaved'] && $sitemapResults['robotsSaved'],
    'settingsSaved' => $result !== false,
    'indexSynced' => $indexSynced,
    'careersSynced' => $careersSynced,
    'sitemapSaved' => $sitemapResults['sitemapSaved'],
    'robotsSaved' => $sitemapResults['robotsSaved']
]);
?>
