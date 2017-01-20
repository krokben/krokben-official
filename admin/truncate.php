<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");

if (isset($_POST['truncate'])) {
	$sql = "TRUNCATE TABLE cv";

	mysqli_query($db, $sql);
}

echo $sql;