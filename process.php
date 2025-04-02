<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $firstname = htmlspecialchars(trim($_POST['firstname']));
    $lastname = htmlspecialchars(trim($_POST['lastname']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $instagram = htmlspecialchars(trim($_POST['instagram']));
    $project_type = htmlspecialchars(trim($_POST['project_type']));
    $details = htmlspecialchars(trim($_POST['details']));

    // Validate input
    if (empty($firstname) || empty($lastname) || empty($email) || empty($phone) || empty($instagram) || empty($project_type) || empty($details)) {
        die("All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Example: Send email (Modify accordingly)
    $to = "chijioke@chijioke.tech"; // Change to your email
    $subject = "New Booking Request";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
    
    $body = "New Booking Request:\n\n" .
            "First Name: $firstname\n" .
            "Last Name: $lastname\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Instagram: $instagram\n" .
            "Project Type: $project_type\n" .
            "Details:\n$details";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thankyou.html"); // Redirect to a thank-you page
exit;
    } else {
        echo "Error sending your request. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
