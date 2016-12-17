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
    $sql = "UPDATE $title SET header='$header' WHERE date='$id'";
} else if (isset($_POST['date'])) {
    $sql = "UPDATE $title SET date='$date' WHERE header='$id'";
} else if (isset($_POST['paragraph'])) {
    if (!isset($_POST['noheader'])) {
        $sql = "UPDATE $title SET paragraph='$paragraph' WHERE header='$id'";
    } else {
        $sql = "UPDATE $title SET paragraph='$paragraph' WHERE id='$id'";
    }
}

mysqli_query($db, $sql);
