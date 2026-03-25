<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache');

$file = __DIR__ . '/../data/settings.json';

if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo json_encode(null); // no settings saved yet
}
?>