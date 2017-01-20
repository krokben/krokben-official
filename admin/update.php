<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");

$obj = json_decode($_POST['tableData'], true);

if (isset($_POST['tableData'])) {
	foreach ($obj as $item) {
		$category = $item['category'];
		$header = $item['header'];
		$date = $item['date'];
		$paragraph = $item['paragraph'];
		$sql = "INSERT INTO cv (category, header, date, paragraph)
				VALUES ('$category', '$header', '$date', '$paragraph')";

		mysqli_query($db, $sql);
	}
}