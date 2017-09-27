<?php

// variable
$fromemail = 'no-responder@lightup.cl'; // from mail
$to = "lightup.utfsm@gmail.com"; // to mail


// check data
if (!isset($_POST["fields"])) {
	die('error;Debe ingresar los datos del formulario.');
}

$fields = $_POST["fields"];

if( empty($fields['name']) ) {
	die('error;Debe ingresar un nombre.');
}

if( empty($fields['subject']) ) {
	die('error;Debe ingresar un asunto.');
}

if( empty($fields['email']) ) {
	die('error;Debe ingresar un correo electrónico.');
}

if( empty($fields['message']) ) {
	die('error;Debe ingresar un mensaje.');
}

// if (!empty( $fields['code'] ) ) {
// 	die("Tu mensaje se ha enviado correctamente, nos contactaremos contigo lo antes posible.");
// }



$subject = "Formulario de Contacto: " . $fields['subject'];
// subject massege
$subject = '=?utf-8?Q?'.urlencode($subject).'?=';
$subject= str_replace("%","=",$subject);
$subject = str_replace("+","_",$subject);

// content massage
$message = "<b>Nombre: </b> " . $fields['name'] . "<br>";
$message .= "<b>Mail: </b> " . $fields['email'] . "<br>";
$message .= "<b>Teléfono: </b> ".$fields['phone']."<br>";
$message .= "<b>Asunto: </b> " . $fields['subject'] . "<br>";
$message .= "<b>Mensaje:</b>\n" . $fields['message'] . "<br>";

// $message .= "Sent: ".strftime("%a, %d %b %Y %H:%M:%S");
// end content massage


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: no-responder <" . $fromemail . ">\r\n";

if(mail($to, $subject, $message, $headers)){
	print 'success;Tu mensaje se ha enviado correctamente, nos contactaremos contigo lo antes posible.';
} else {
	print 'error;Error al enviar el mensaje, por favor intentelo más tarde.';
}

?>
