<?php
/**
 * AMG Main Contracting — Career Application Mailer
 * Sends job applications to HR email
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

function sanitize($val) {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}
function jsonResponse($success, $message = '') {
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(false, 'Method not allowed');

$name       = sanitize($_POST['name']       ?? '');
$email      = sanitize($_POST['email']      ?? '');
$phone      = sanitize($_POST['phone']      ?? '');
$education  = sanitize($_POST['education']  ?? '');
$experience = sanitize($_POST['experience'] ?? '');
$message    = sanitize($_POST['message']    ?? '');
$jobTitle   = sanitize($_POST['job_title']  ?? 'Open Application');
$hrEmail    = sanitize($_POST['hr_email']   ?? 'hr@amgcontracting.com');
$lang       = sanitize($_POST['lang']       ?? 'en');

if (empty($name) || empty($email) || empty($phone)) jsonResponse(false, 'Missing required fields');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) jsonResponse(false, 'Invalid email');

// ── Handle CV Upload ──
$cvInfo = '';
$cvAttachment = '';
if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
    $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    $fileType = mime_content_type($_FILES['cv']['tmp_name']);
    if (!in_array($fileType, $allowedTypes)) jsonResponse(false, 'Invalid CV file type');
    if ($_FILES['cv']['size'] > 5 * 1024 * 1024) jsonResponse(false, 'CV too large (max 5MB)');

    $cvData    = file_get_contents($_FILES['cv']['tmp_name']);
    $cvBase64  = base64_encode($cvData);
    $cvName    = basename($_FILES['cv']['name']);
    $cvMime    = $fileType;
    $cvInfo    = "<div class='field'><label>CV / Resume</label><span>" . htmlspecialchars($cvName, ENT_QUOTES) . " (attached)</span></div>";

    $cvAttachment = [
        'data' => $cvBase64,
        'name' => $cvName,
        'mime' => $cvMime
    ];
}

$eduLabels = ['bachelor'=>"Bachelor's", 'master'=>"Master's", 'phd'=>'PhD', 'diploma'=>'Diploma'];

$emailSubject = "Job Application: {$jobTitle} — AMG Main Contracting";

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'>
<style>
  body{font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px}
  .wrap{max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.1)}
  .header{background:#2B2B2B;padding:30px;text-align:center}
  .header h1{color:#B8860B;font-size:22px;margin:0}
  .header p{color:rgba(255,255,255,.6);font-size:13px;margin:6px 0 0}
  .job-badge{display:inline-block;background:rgba(184,134,11,.2);color:#B8860B;border:1px solid rgba(184,134,11,.4);padding:6px 18px;border-radius:100px;font-size:13px;font-weight:700;margin:16px 0 0}
  .body{padding:30px}
  .field{margin-bottom:18px;border-bottom:1px solid #f0f0f0;padding-bottom:14px}
  .field label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;display:block;margin-bottom:4px}
  .field span{font-size:15px;color:#333}
  .msg-box{background:#faf8f5;border-left:3px solid #B8860B;padding:16px;border-radius:4px}
  .footer{background:#f5f5f5;padding:16px 30px;text-align:center;font-size:12px;color:#999}
</style>
</head>
<body>
<div class='wrap'>
  <div class='header'>
    <h1>AMG Main Contracting</h1>
    <p>New Job Application Received</p>
    <div class='job-badge'>📋 {$jobTitle}</div>
  </div>
  <div class='body'>
    <div class='field'><label>Full Name</label><span>{$name}</span></div>
    <div class='field'><label>Email</label><span><a href='mailto:{$email}'>{$email}</a></span></div>
    <div class='field'><label>Phone</label><span>{$phone}</span></div>
    <div class='field'><label>Education</label><span>" . ($eduLabels[$education] ?? $education) . "</span></div>
    <div class='field'><label>Years of Experience</label><span>{$experience} years</span></div>
    {$cvInfo}
    " . (!empty($message) ? "<div class='field'><label>Cover Message</label><div class='msg-box'>" . nl2br($message) . "</div></div>" : '') . "
  </div>
  <div class='footer'>Submitted via AMG Careers &bull; " . date('Y-m-d H:i:s') . "</div>
</div>
</body>
</html>";

// ── Build multipart if CV attached ──
$boundary = md5(time());

if ($cvAttachment) {
    $headers  = "From: AMG Careers <noreply@amgcontracting.com>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";

    $body  = "--{$boundary}\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
    $body .= $htmlBody . "\r\n";
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: {$cvAttachment['mime']}; name=\"{$cvAttachment['name']}\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"{$cvAttachment['name']}\"\r\n\r\n";
    $body .= chunk_split($cvAttachment['data']) . "\r\n";
    $body .= "--{$boundary}--";
} else {
    $headers  = "From: AMG Careers <noreply@amgcontracting.com>\r\n";
    $headers .= "Reply-To: {$name} <{$email}>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";
    $body = $htmlBody;
}

$sent = mail($hrEmail, $emailSubject, $body, $headers);
jsonResponse($sent, $sent ? 'Application sent' : 'Mail delivery failed');
