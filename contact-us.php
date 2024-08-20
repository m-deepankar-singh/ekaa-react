<?php
// Disable error reporting for production
error_reporting(0);
ini_set('display_errors', 0);

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = sanitize_input($_POST['name']);
    $phone = sanitize_input($_POST['phone']);
    $email = sanitize_input($_POST['email']);
    $regarding = sanitize_input($_POST['regarding']);
    $message = sanitize_input($_POST['message']);

    // Validate inputs
    if (empty($name) || empty($phone) || empty($email) || empty($regarding)) {
        echo json_encode(["status" => "error", "message" => "Please fill all required fields."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }

    // Compose email
    $to = "singh.deepankar39@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Regarding: $regarding\n\n";
    $email_content .= "Message:\n$message\n";

    // Set email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "Thank you for your message. We'll get back to you soon!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong. Please try again later."]);
    }
} else {
    // If not a POST request, return an error
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>