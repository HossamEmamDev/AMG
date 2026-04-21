<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once __DIR__ . '/inbox_store.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$type = $_POST['type'] ?? '';
$index = isset($_POST['index']) ? (int) $_POST['index'] : -1;

if (!in_array($type, ['messages', 'applications'], true)) {
    echo json_encode(['success' => false, 'message' => 'Invalid type']);
    exit;
}

$items = inbox_read_list($type);
if (!isset($items[$index])) {
    echo json_encode(['success' => false, 'message' => 'Item not found']);
    exit;
}

array_splice($items, $index, 1);
$saved = inbox_write_list($type, $items);

echo json_encode(['success' => $saved], JSON_UNESCAPED_UNICODE);
?>
