// Expand CV
$('.cv-header div > h2').on('click', function() {
    $(this).toggleClass('orange');
    $(this).siblings().slideToggle();
});
