<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');

if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO messages (name, email, message)
    VALUES ('$name', '$email', '$message')";

    if ($db->query($sql) === TRUE) {
        echo "Tack för ert mail!";
    } else {
        echo "Tyvärr, där blev det något fel. Vänligen försök igen.";
    }

    // Send email
        mail("svensson.tommy@student.kyh.se", "Mail till krokben.se från " . $email, $message);
}

?>
