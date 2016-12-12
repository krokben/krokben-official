$('#profile').hover(function() {
    $(this).css('background-image', 'url("images/jagstor2.png")');
    }, function() {
    $(this).css('background-image', 'url("images/jagstor.png")');
});

// Countdown Timer made by https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies
// (Refactored into jQuery)
var lia = '2018-01-15';
var examen = '2018-05-31';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
}

function initializeClock(id, endtime){

    function updateClock(){
        var t = getTimeRemaining(endtime);

        $(id).children('.days').html(t.days);
        $(id).children('.hours').html(('0' + t.hours).slice(-2));
        $(id).children('.minutes').html(('0' + t.minutes).slice(-2));
        $(id).children('.seconds').html(('0' + t.seconds).slice(-2));

        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock, 1000);

}

initializeClock('#clockdiv', lia);
initializeClock('#clockdiv2', examen);

// Mail form
$('#submitButton').click(function(event){

    event.preventDefault(); // Stop form from submitting normally

    var vname = $('#name').val();
    var vemail = $('#email').val();
    var vmessage = $('#message').val();

    if(vname === '' || vemail === '' || vmessage === '') {
        $('#messageSuccess').hide();
        $('#messageFail').fadeIn().html('Var vänlig fyll i alla fält innan ni skickar.');
    } else {

    $.post('confirmation.php', //Required URL of the page on server
    { // Data Sending With Request To Server
        name: vname,
        email: vemail,
        message: vmessage
    },
    function(response,status) { // Required Callback Function
        $('#messageFail').hide();
        $('#messageSuccess').fadeIn().html(response);//'response' receives - whatever written in echo of above PHP script.
        $('#form')[0].reset();
    });
    }
});

// Error messages in placeholders in mail form
$('#name').focusout(function() {
    if ($(this).val().length < 3 || $(this).val().length > 20) {
        $(this).attr('placeholder', 'Måste vara mellan 3 och 20 karaktärer.').addClass('error_message').val('');
    }
});

$('#email').focusout(function() {
    var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pattern.test($('#email').val()) === false) {
        $(this).attr('placeholder', 'Var vänlig skriv in en korrekt email-adress').addClass('error_message').val('');
    }
});

$('#message').focusout(function() {
    if ($(this).val().length < 3) {
        $(this).attr('placeholder', 'Måste vara minst 3 karaktärer.').addClass('error_message').val('');
    }
});
