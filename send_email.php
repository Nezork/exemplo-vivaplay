<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $income = htmlspecialchars($_POST['income']);

    $to = "matheuscardozo679@gmail.com"; // Substitua pelo seu e-mail
    $subject = "Novo Contato do Formulário";
    $message = "Nome: $name\nTelefone: $phone\nE-mail: $email\nRenda Média: $income";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>