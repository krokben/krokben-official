<?php

include('db.php');

$paragraph = $_POST['paragraph'];

if (isset($paragraph)) {
		$paragraph = mysqli_real_escape_string($db, $paragraph);
		$sql = "UPDATE about 
				SET paragraph = '$paragraph'
				WHERE id = 1
		";

		mysqli_query($db, $sql);
}