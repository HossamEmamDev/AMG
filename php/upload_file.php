<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

$secret = $_POST['secret'] ?? '';
if ($secret !== 'amg_admin_2025') {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

if (!isset($_FILES['file']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No file uploaded']);
    exit;
}

function sanitize_segment($value) {
    $value = strtolower((string) $value);
    $value = preg_replace('/[^a-z0-9._-]+/', '-', $value);
    $value = trim($value, '-.');
    return $value ?: 'file';
}

function delete_asset_if_exists($relativePath) {
    $relativePath = preg_replace('/\?.*$/', '', ltrim((string) $relativePath, '/'));
    if ($relativePath === '' || strpos($relativePath, 'assets/') !== 0) {
        return;
    }

    $assetsRoot = realpath(__DIR__ . '/../assets');
    if ($assetsRoot === false) {
        return;
    }

    $fullPath = __DIR__ . '/../' . $relativePath;
    $parentDir = realpath(dirname($fullPath));
    if ($parentDir === false || strpos($parentDir, $assetsRoot) !== 0) {
        return;
    }

    if (is_file($fullPath)) {
        @unlink($fullPath);
    }
}

$folder = trim((string) ($_POST['folder'] ?? ''), '/');
$segments = array_values(array_filter(explode('/', $folder), static function ($segment) {
    return $segment !== '';
}));

if (!$segments) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing upload folder']);
    exit;
}

$root = sanitize_segment(array_shift($segments));
if (!in_array($root, ['images', 'files'], true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid upload root']);
    exit;
}

$safeSegments = [$root];
foreach ($segments as $segment) {
    $safeSegments[] = sanitize_segment($segment);
}

$tmpPath = $_FILES['file']['tmp_name'];
$originalName = $_FILES['file']['name'] ?? 'upload.bin';
$requestedName = sanitize_segment($_POST['filename'] ?? pathinfo($originalName, PATHINFO_FILENAME));

$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = $finfo ? finfo_file($finfo, $tmpPath) : '';
if ($finfo) {
    finfo_close($finfo);
}

$allowedImageTypes = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/webp' => 'webp',
    'image/gif' => 'gif',
    'image/avif' => 'avif',
    'image/svg+xml' => 'svg',
];
$allowedFileTypes = [
    'application/pdf' => 'pdf',
];

$allowedTypes = $root === 'images' ? $allowedImageTypes : $allowedFileTypes;
if (!isset($allowedTypes[$mime])) {
    http_response_code(415);
    echo json_encode(['success' => false, 'message' => 'Unsupported file type']);
    exit;
}

$extension = $allowedTypes[$mime];
$targetDir = __DIR__ . '/../assets/' . implode('/', $safeSegments);
if (!is_dir($targetDir) && !mkdir($targetDir, 0755, true) && !is_dir($targetDir)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to create upload directory']);
    exit;
}

$overwrite = ($_POST['overwrite'] ?? '') === '1';
$replacePath = $_POST['replace_path'] ?? '';

if ($replacePath !== '') {
    delete_asset_if_exists($replacePath);
}

if ($overwrite) {
    foreach (glob($targetDir . '/' . $requestedName . '.*') ?: [] as $existingFile) {
        if (is_file($existingFile)) {
            @unlink($existingFile);
        }
    }
    $finalName = $requestedName . '.' . $extension;
} else {
    $finalName = $requestedName . '-' . date('Ymd-His') . '-' . substr(bin2hex(random_bytes(4)), 0, 8) . '.' . $extension;
}

$targetPath = $targetDir . '/' . $finalName;

if (!move_uploaded_file($tmpPath, $targetPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save file']);
    exit;
}

$publicPath = 'assets/' . implode('/', $safeSegments) . '/' . $finalName;
if ($overwrite) {
    $publicPath .= '?v=' . time();
}
echo json_encode(['success' => true, 'path' => $publicPath]);
?>
