<?php

$data = [];
$server_output = [];
$response = [];

$settings = include_once(__DIR__ . '/../settings.php');

if (!empty($_POST) && !empty($_POST['name'])) {
  $data['name'] = $_POST['name'];
  $data['text'] = "Submitted name: " . $data['name'];

  // Google check BOT
  $captcha = $_POST['g-recaptcha-response'];
  $secretKey = Settings::getGoogleSecretKey();
  $ip = $_SERVER['REMOTE_ADDR'];
  $captcha_response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secretKey . "&response=" . $captcha . "&remoteip=" . $ip);
  $responseKeys = json_decode($captcha_response, true);
  if(intval($responseKeys["success"]) !== 1) {
    $response['status'] = 'error';
    $response['info'] = 'Captcha error';
    $data['response'] = 'Captcha verification failed, please click the captcha again!';
  } else {
    // Do this only if google recaptcha passes
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, Settings::getAWSGatewayEndpoint());
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $headers = [
      'x-api-key: ' . Settings::getAWSGatewayKey(),
      'Content-Type: application/json; charset=utf-8',
    ];

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $server_output = curl_exec($ch);
    curl_close($ch);

    $response['status'] = 'success';
    $response['info'] = 'API call finished!';
    $data['response'] = "Dear " . $data['name'] . " Thanks for the submission, email sent";
  }
}

// Set JSON header
header('Content-Type: application/json');

// Return response
$response['server_response'] = $server_output;
$response['data'] = $data;

echo json_encode($response);
exit();

?>
