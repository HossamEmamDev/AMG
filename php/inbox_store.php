<?php

function inbox_data_dir() {
    $dir = __DIR__ . '/../data/';
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    return $dir;
}

function inbox_file_path($name) {
    return inbox_data_dir() . $name . '.json';
}

function inbox_read_list($name) {
    $file = inbox_file_path($name);
    if (!file_exists($file)) {
        return [];
    }

    $raw = file_get_contents($file);
    if ($raw === false || trim($raw) === '') {
        return [];
    }

    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function inbox_write_list($name, $items) {
    return file_put_contents(
        inbox_file_path($name),
        json_encode(array_values($items), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
    ) !== false;
}

function inbox_append_item($name, $item) {
    $items = inbox_read_list($name);
    $items[] = $item;
    return inbox_write_list($name, $items);
}
