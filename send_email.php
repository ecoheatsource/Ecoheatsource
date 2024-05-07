<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Set up the recipient email address
    $to = 'janshoj@yahoo.com'; // Replace this with your email address

    // Set up the email subject
    $subject = 'New Quote Request';

    // Compose the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Message:\n$message";

    // Set up the email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo '<script>alert("Your message has been sent. We will get back to you soon.");</script>';
    } else {
        echo '<script>alert("Error sending message. Please try again later.");</script>';
    }
}
?>
