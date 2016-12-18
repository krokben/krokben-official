<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");

$paragraph = $_POST['paragraph'];

if (isset($_POST['paragraph'])) {
    $sql = "UPDATE about SET paragraph='$paragraph' WHERE id='1'";
    mysqli_query($db, $sql);
}
