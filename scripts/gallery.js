var mq = window.matchMedia("(min-width: 600px)");

$('.lightbox').hide();
$('.gallery-item').on('click', function() {
    if (mq.matches) {
        $('.lightbox').fadeIn();
        $('.lightboxDiv').html($(this).html());
        $('body').css('overflow', 'hidden');
    }
});

$('.lightboxDiv').on('click', function() {
    $('.lightbox').fadeOut();
    $('body').css('overflow', 'auto');
});

$('#leftArrow').on('click', function() {
    x = $('.lightboxDiv').html();
    var a = x.slice(0, 17);
    var b = Number(x.substr(17, 1));
    var c = x.slice(18);
    if (b !== 1) {
        $('.lightboxDiv').html(a + (b - 1) + c);
    }
});

$('#rightArrow').on('click', function() {
    x = $('.lightboxDiv').html();
    var a = x.slice(0, 17);
    var b = Number(x.substr(17, 1));
    var c = x.slice(18);
    if (b < $('.gallery-item').length) {
        $('.lightboxDiv').html(a + (b + 1) + c);
    }
});
