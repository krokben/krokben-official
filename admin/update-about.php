<?php

include('db.php');

$obj = json_decode($_POST['tableData'], true);

if (isset($_POST['tableData'])) {
	foreach ($obj as $item) {
		$paragraph = mysqli_real_escape_string($db, $item['paragraph']);
		$sql = "INSERT INTO about (paragraph)
				VALUES ('$paragraph')";

		mysqli_query($db, $sql);
	}
}