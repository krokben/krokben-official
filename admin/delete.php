<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");

$title = $_POST['title'];
$id = $_POST['id'];

if (isset($_POST['title']) && isset($_POST['id'])) {
    $sql = "DELETE FROM $title WHERE id='$id'";
    mysqli_query($db, $sql);
}
