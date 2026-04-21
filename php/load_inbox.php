<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/inbox_store.php';

echo json_encode([
    'success' => true,
    'messages' => inbox_read_list('messages'),
    'applications' => inbox_read_list('applications'),
], JSON_UNESCAPED_UNICODE);
?>
