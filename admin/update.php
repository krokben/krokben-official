<?php

include('db.php');

$obj = json_decode($_POST['tableData'], true);

if (isset($_POST['tableData'])) {
	foreach ($obj as $item) {
		$category = mysqli_real_escape_string($db, $item['category']);
		$header = mysqli_real_escape_string($db, $item['header']);
		$date = mysqli_real_escape_string($db,$item['date']);
		$paragraph = mysqli_real_escape_string($db, $item['paragraph']);
		$sql = "INSERT INTO cv (category, header, date, paragraph)
				VALUES ('$category', '$header', '$date', '$paragraph')";

		mysqli_query($db, $sql);
	}
}