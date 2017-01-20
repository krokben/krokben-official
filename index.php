<?php
// $db = mysqli_connect('krokben-219508.mysql.binero.se', '219508_aq20643','crookbone' , '219508-krokben');
$db = mysqli_connect('localhost', 'root','' , 'krokben');
mysqli_query($db, "SET NAMES utf8");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>krokben.se</title>
    <link rel="stylesheet" type="text/css" href="stylesheets/main.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Sunshiney|Open+Sans|VT323|Share+Tech+Mono" rel="stylesheet">
</head>
<body>
    <?php
        include 'navbar.php';
        if (empty($_GET['p'])) {
            include 'home.php';
        } else {
            switch ($_GET['p']) {
                case 'portfolio':
                    include 'portfolio.php';
                    break;
                case 'cv':
                    include 'cv.php';
                    break;
                case 'gallery':
                    include 'gallery.php';
                    break;
                case 'websites':
                    include 'websites.php';
                    break;
                case 'code':
                    include 'code.php';
                    break;
                case 'login':
                    include 'login.php';
                    break;
                case 'admin':
                    include 'admin.php';
                    break;
                default:
                    include 'home.php';
            }
        }

        include 'footer.php';
    ?>

    <iframe id="easterEgg" src=""></iframe>
