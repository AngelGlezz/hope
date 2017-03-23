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
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = $subject;
	$mail->Body    = $message;
	$mail->AltBody = $message;

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

