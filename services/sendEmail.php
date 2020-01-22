<?php

if(isset($_POST['inputEmail']) && !empty($_POST['inputEmail'])){

    $nome = addslashes($_POST['inputNome']);
    $sobrenome = addslashes($_POST['inputSobrenome']);
    $email = addslashes($_POST['inputEmail']);
    $feedback = addslashes($_POST['textFeedback']);

    $to = "contato.marlonrodler@gmail.com";
    $subject = "Contato - Marlon Rodler";
    $body = "Nome: ".$nome. " ".$sobrenome. " \r\n".
            "Email: ".$email. "\r\n".
            "Feedback: ".$feedback;
    $header = "From:marlon.rodler@hotmail.com"."\r\n".
              "Reply-To:".$email."\r\n".
              "X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso!");
    }else{
        echo("O email não pode ser enviado!");
    }

}