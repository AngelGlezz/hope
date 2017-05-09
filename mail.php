<?php
	require 'libraries/phpmailer/class.phpmailer.php';
	require 'libraries/phpmailer/PHPMailerAutoload.php';
	require 'libraries/phpmailer/class.smtp.php';
//https://www.google.com/settings/security/lesssecureapps
	$mail = new PHPMailer;
	$name = $_POST['name'];
	$email = $_POST['mail'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$message_html = '<!DOCTYPE html>
					<html>
					<head>
						<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
						<meta http-equiv="content-type" content="text/html; charset=utf-8">
						<style type="text/css">
							.top {
								width: 500px;
								margin: 20px auto;
							}

							.top img {
								width: 100%;
								margin: auto;
							}

							.content {
								width: 500px;
								margin: auto;
							}

							.saludo {
								font-size: 20px;
								color: #3e679f;
								margin: 20px auto;
							}

							.mensaje {
								font-size: 18px;
								color: #3e679f;
								margin: 10px auto;
							}

							.copi {
								font-size: 12px;
								color: #525151;
							}

							@media (max-width: 500px) {
								.top {
									width: 70%;
								}
							}
						</style>
					</head>
					<body>
						<div class="mail">
							<div class="top">
								<img src="cid:hope">
							</div>
							<div class="content">
								<div class="saludo">Hola, ' . $name . '</div>
								<div class="mensaje">Mensaje:<br>'. $message . '</div>
								<div class="copi">Es una copia del mensaje que enviaste a HopeSistemas</div>
							</div>
						</div>
					</body>
					</html>';

	//$mail->SMTPDebug = 3;                               	// Enable verbose debug output

	$mail->isSMTP();                                      	// Set mailer to use SMTP
	$mail->Host = 'mail.hopesistemas.com.mx';//'localhost''smtp.gmail.com'			// Specify main and backup SMTP servers
	$mail->SMTPAuth = true;	//false;                       	// Enable SMTP authentication
	$mail->Username = 'contacto@hopesistemas.com.mx';           	// SMTP username
	$mail->Password = 'hosthope2503';                         	// SMTP password
	$mail->SMTPSecure = 'ssl';                            	// Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;										// TCP port to connect to                              

	$mail->setFrom('contacto@hopesistemas.com.mx', 'HopeSistemas');
	//$mail->addAddress('contacto@hopesistemas.com.mx', 'Contacto');     	// Add a recipient
	$mail->addAddress($email, $name);          						// Name is optional
	//$mail->addReplyTo('contacto@hopesistemas.com.mx', 'Contacto');
	//$mail->addCC('cc@example.com');
	$mail->addBCC('angelglezz.7@gmail.com');

	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);
	$mail->AddEmbeddedImage('images/hope.png', 'hope', 'hope.png');                                  // Set email format to HTML

	$mail->Subject = $subject;
	$mail->Body    = $message_html;
	$mail->AltBody = $message . " Es es una copia del mensaje recibido por HopeSistemas.";

	//var_dump($mail->send());
	if(!$mail->send()) {
	    //echo 'Message could not be sent.';
	    //echo 'Mailer Error: ' . $mail->ErrorInfo;
	    $response = ["response" => false];
	} else {
	    //echo 'Message has been sent';
	    $response = ["response" => true];
	}

	echo json_encode($response);
?>

