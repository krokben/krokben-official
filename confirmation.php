<?php

include('admin/db.php');

if($_POST) {
    $name = mysqli_real_escape_string($db, $_POST['name']);
    $phone = mysqli_real_escape_string($db, $_POST['phone']);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $message = mysqli_real_escape_string($db, $_POST['message']);

    $sql = "INSERT INTO messages (name, phone, email, message)
    VALUES ('$name', '$phone', '$email', '$message')";

    if ($db->query($sql) === TRUE) {
        echo "Tack för ert meddelande!";
    } else {
        echo "Tyvärr, där blev det något fel. Vänligen försök igen.";
    }

    // Send email
        // mail("svensson.tommy@student.kyh.se", "Mail till krokben.se från " . $email, $message);
}

?>
