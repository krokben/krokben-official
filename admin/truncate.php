<?php

include('db.php');

if (isset($_POST['truncate'])) {
	$sql = "TRUNCATE TABLE cv";

	mysqli_query($db, $sql);
}

echo $sql;