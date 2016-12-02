$('.nav-home').on('click', function() {
    $('#content').html = "<?php include 'home.php' ?>";
});
$('.nav-portfolio').on('click', function() {
    $('#content').html = "<?php include 'portfolio.php' ?>";
});
$('.nav-cv').on('click', function() {
    $('#content').html = "<?php include 'cv.php' ?>";
});
