$(document).ready(function(){

// Show the hidden menu
$('#trigram').on('click', function() {
    $('#hiddenMenu').css('opacity', '0.9');
    $('#hiddenMenu').show();
    $(this).hide();
    $('body').css('overflow', 'hidden'); // Prevent page from scrolling
});

$('#trigram2').on('click', function() {
    $('#hiddenMenu').css('opacity', '0');
    $('body').css('overflow', 'auto'); // Make page scrollable again
    $('#hiddenMenu').on('transitionend', function() {
        $('#hiddenMenu').hide();
        $('#trigram').show();
        });
});


});

// Make active page active in navbar
var urlsearch = location.search;

if (urlsearch === '?p=home' || urlsearch === '') {
    if ($('#hem').hasClass('active') === false) {
        $('#hem').addClass('active');
    }
    if ($('#portfolio').hasClass('active')) {
        $('#portfolio').removeClass('active');
    }
    if ($('#cv').hasClass('active')) {
        $('#cv').removeClass('active');
    }
}
else if (urlsearch === '?p=portfolio' || urlsearch === '?p=gallery' || urlsearch === '?p=websites' || urlsearch === '?p=code') {
    if ($('#porfolio').hasClass('active') === false) {
        $('#portfolio').addClass('active');
    }
    if ($('#hem').hasClass('active')) {
        $('#hem').removeClass('active');
    }
    if ($('#cv').hasClass('active')) {
        $('#cv').removeClass('active');
    }
}
else if (urlsearch === '?p=cv') {
    if ($('#cv').hasClass('active') === false) {
        $('#cv').addClass('active');
    }
    if ($('#hem').hasClass('active')) {
        $('#hem').removeClass('active');
    }
    if ($('#portfolio').hasClass('active')) {
        $('#portfolio').removeClass('active');
    }
}

// Make goBack arrow appear
if (urlsearch === '?p=gallery' || urlsearch === '?p=websites' || urlsearch === '?p=code') {
    $('#goBack').show();
}

// Listen for keypress to execute Hangman game
$(document).on('keydown', function(e) {
    if (e.ctrlKey && (String.fromCharCode(e.which).toLowerCase() === 'h')) {
        $('#easterEgg').toggle().focus().attr('src', 'hangman/index.html');
    }
});

// Facebook share
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter share
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}(document, 'script', 'twitter-wjs');
