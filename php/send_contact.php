<?php
/**
 * AMG Main Contracting — Contact Form Mailer
 * Sends contact form submissions to company email
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/inbox_store.php';

// ── Helpers ──
function sanitize($val) {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

function jsonResponse($success, $message = '') {
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

// ── Only POST ──
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(false, 'Method not allowed');
}

// ── Collect fields ──
$name     = sanitize($_POST['name']    ?? '');
$email    = sanitize($_POST['email']   ?? '');
$phone    = sanitize($_POST['phone']   ?? '');
$subject  = sanitize($_POST['subject'] ?? '');
$message  = sanitize($_POST['message'] ?? '');
$toEmail  = sanitize($_POST['to_email'] ?? 'info@amgcontracting.com');
$lang     = sanitize($_POST['lang']    ?? 'en');
$requiredConfig = json_decode($_POST['required_config'] ?? '{}', true);

// ── Validate ──
$requiredConfig = is_array($requiredConfig) ? $requiredConfig : [];
$fieldValues = [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'subject' => $subject,
    'message' => $message,
];
foreach ($requiredConfig as $field => $isRequired) {
    if ($field === 'attachment') continue;
    if ($isRequired && empty($fieldValues[$field])) {
        jsonResponse(false, 'Missing required fields');
    }
}
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(false, 'Invalid email');
}

$attachmentInfo = '';
$attachmentData = null;
if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK) {
    $allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
    ];
    $fileType = mime_content_type($_FILES['attachment']['tmp_name']);
    if (!in_array($fileType, $allowedTypes)) jsonResponse(false, 'Invalid attachment type');
    if ($_FILES['attachment']['size'] > 5 * 1024 * 1024) jsonResponse(false, 'Attachment too large (max 5MB)');

    $attachmentName = basename($_FILES['attachment']['name']);
    $attachmentInfo = "<div class='field'><label>Attachment</label><span>" . htmlspecialchars($attachmentName, ENT_QUOTES) . " (attached)</span></div>";
    $attachmentData = [
        'data' => base64_encode(file_get_contents($_FILES['attachment']['tmp_name'])),
        'name' => $attachmentName,
        'mime' => $fileType
    ];
}
if (!empty($requiredConfig['attachment']) && !$attachmentData) jsonResponse(false, 'Missing required fields');

// ── Build email ──
$emailSubject = "New Contact: " . ($subject ?: 'General Inquiry') . " — AMG Main Contracting";

$htmlBody = "
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='UTF-8'>
<style>
  body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
  .wrap { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
  .header { background: #2B2B2B; padding: 30px; text-align: center; }
  .header h1 { color: #B8860B; font-size: 22px; margin: 0; }
  .header p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 6px 0 0; }
  .body { padding: 30px; }
  .field { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
  .field label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999; display: block; margin-bottom: 4px; }
  .field span { font-size: 15px; color: #333; }
  .message-box { background: #faf8f5; border-left: 3px solid #B8860B; padding: 16px; border-radius: 4px; }
  .footer { background: #f5f5f5; padding: 16px 30px; text-align: center; font-size: 12px; color: #999; }
</style>
</head>
<body>
<div class='wrap'>
  <div class='header'>
    <h1>AMG Main Contracting</h1>
    <p>New Contact Form Submission</p>
  </div>
  <div class='body'>
    <div class='field'><label>Name</label><span>" . $name . "</span></div>
    <div class='field'><label>Email</label><span><a href='mailto:" . $email . "'>" . $email . "</a></span></div>
    <div class='field'><label>Phone</label><span>" . $phone . "</span></div>
    <div class='field'><label>Subject</label><span>" . ($subject ?: 'General Inquiry') . "</span></div>
    " . $attachmentInfo . "
    <div class='field'>
      <label>Message</label>
      <div class='message-box'>" . nl2br($message) . "</div>
    </div>
  </div>
  <div class='footer'>Sent via AMG Main Contracting Website &bull; " . date('Y-m-d H:i:s') . "</div>
</div>
</body>
</html>";

// ── Headers to avoid spam ──
$boundary = md5(time());
if ($attachmentData) {
    $headers  = "From: AMG Website <noreply@amgcontracting.com>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Importance: Normal\r\n";

    $body  = "--{$boundary}\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
    $body .= $htmlBody . "\r\n";
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: {$attachmentData['mime']}; name=\"{$attachmentData['name']}\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"{$attachmentData['name']}\"\r\n\r\n";
    $body .= chunk_split($attachmentData['data']) . "\r\n";
    $body .= "--{$boundary}--";
} else {
    $headers  = "From: AMG Website <noreply@amgcontracting.com>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Importance: Normal\r\n";
    $body = $htmlBody;
}

$sent = mail($toEmail, $emailSubject, $body, $headers);

if ($sent) {
    inbox_append_item('messages', [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'subject' => $subject ?: 'General Inquiry',
        'message' => $message,
        'attachmentName' => $attachmentData['name'] ?? '',
        'date' => gmdate('c'),
        'read' => false,
    ]);
    jsonResponse(true, 'Message sent successfully');
} else {
    jsonResponse(false, 'Mail delivery failed');
}
