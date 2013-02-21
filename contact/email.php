<?php

	$name = $_POST["name"];
  	$ToEmail = 'fara.ashiru@gmail.com'; 
	$EmailSubject = 'Design Job Inquiry'; 
	$mailheader = "From: ".$_POST["email"]."\r\n"; 
	$mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
	$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
	$MESSAGE_BODY = "Name: ".$_POST["name"].""; 
	$MESSAGE_BODY .= "Email: ".$_POST["email"].""; 
	$MESSAGE_BODY .= "Website: ".$_POST["website"].""; 
	$MESSAGE_BODY .= "Project: ".$_POST["project"].""; 
	$MESSAGE_BODY .= "BudPOST: ".$_POST["budPOST"].""; 
	$MESSAGE_BODY .= "Timeframe: ".$_POST["timeframe"].""; 
	$MESSAGE_BODY .= "About You: ".$_POST["aboutyou"]."";
	$MESSAGE_BODY .= "About Project: ".$_POST["aboutproject"]."";  
	mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 


  	echo $name;

  	return($name);

  
?>