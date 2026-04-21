<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once __DIR__ . '/inbox_store.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$index = isset($_POST['index']) ? (int) $_POST['index'] : -1;
$messages = inbox_read_list('messages');

if (!isset($messages[$index])) {
    echo json_encode(['success' => false, 'message' => 'Message not found']);
    exit;
}

$messages[$index]['read'] = true;
$saved = inbox_write_list('messages', $messages);

echo json_encode(['success' => $saved], JSON_UNESCAPED_UNICODE);
?>
