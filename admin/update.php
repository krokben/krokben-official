<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");

$title = $_POST['title'];
$header = $_POST['header'];
$date = $_POST['date'];
$paragraph = $_POST['paragraph'];
$id = $_POST['id'];

if (isset($_POST['header'])) {
    // Update header
    $sql = "UPDATE $title SET header='$header' WHERE id='$id'";
} else if (isset($_POST['date'])) {
    // Update date
    $sql = "UPDATE $title SET date='$date' WHERE id='$id'";
} else if (isset($_POST['paragraph'])) {
    // Update paragraph
    $sql = "UPDATE $title SET paragraph='$paragraph' WHERE id='$id'";
}

mysqli_query($db, $sql);
