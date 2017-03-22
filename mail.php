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
	$mail->Host = 'smtp.gmail.com';//'localhost'			// Specify main and backup SMTP servers
	$mail->SMTPAuth = true;	//false;                       	// Enable SMTP authentication
	$mail->Username = 'angelglezz.7@gmail.com';           	// SMTP username
	$mail->Password = 'aglezz07';                         	// SMTP password
	$mail->SMTPSecure = 'tls';                            	// Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;										// TCP port to connect to
	$mail­>CharSet = "UTF­8";
	$mail­>Encoding = "quoted­printable";                                     

	$mail->setFrom('contacto@hopesistemas.com.mx', 'Contacto');
	//$mail->addAddress('contacto@hopesistemas.com.mx', 'Contacto');     	// Add a recipient
	$mail->addAddress($email, $name);          						// Name is optional
	$mail->addReplyTo('contacto@hopesistemas.com.mx', 'Contacto');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');

	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = $subject;
	$mail->Body    = $message;
	$mail->AltBody = $message;

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}
?>

