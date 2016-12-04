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
                default:
                    include 'home.php';
            }
        }

        include 'footer.php';
    ?>

    <iframe src=""></iframe>
