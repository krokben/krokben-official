<?php

include('db.php');

$sql = "SELECT * FROM cv";
$result = mysqli_query($db, $sql);

$data = array();
while ($row = mysqli_fetch_assoc($result)) {
  $row_data = array(
      'category' => $row['category'],
      'header' => $row['header'],
      'date' => $row['date'],
      'paragraph' => $row['paragraph']
  );
  array_push($data, $row_data);
}

// function utf8_converter($array) { // Convert array to UTF8 function
//     array_walk_recursive($array, function(&$item, $key){
//         if(!mb_detect_encoding($item, 'utf-8', true)){
//                 $item = utf8_encode($item);
//         }
//     });

//     return $array;
// }

echo json_encode($data);
// echo json_last_error_msg();

?>
