<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");

$title = $_POST['title'];
// $header = $_POST['header'];
// $date = $_POST['date'];
$paragraph = $_POST['paragraph'];
$id = $_POST['id'];

if (isset($_POST['header'])) {
    $sql = "INSERT INTO $title (header, paragraph, date, id)
            VALUES ('$header', '$paragraph', '$date', '$id')";
    mysqli_query($db, $sql);
} else if (isset($_POST['paragraph'])) {
    $sql = "INSERT INTO $title (paragraph, id)
            VALUES ('$paragraph', '$id')";
    mysqli_query($db, $sql);
}
