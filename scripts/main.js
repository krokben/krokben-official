//Expandera menyn
var trigram = document.getElementById("trigram");
var trigram2 = document.getElementById("trigram2");
var hiddenMenu = document.getElementById("hiddenMenu");
var bod = document.body;

trigram.addEventListener("click", function() {
    hiddenMenu.style.opacity = "0.9";
    hiddenMenu.style.display = "inline-block";
    trigram.style.display = "none";
    bod.style.overflow = "hidden"; // Prevent page from scrolling
});

trigram2.addEventListener("click", function() {
    hiddenMenu.style.opacity = "0";
    bod.style.overflow = "auto"; // Make page scrollable again
    hiddenMenu.addEventListener("transitionend", function() {
        hiddenMenu.style.display = "none";
        trigram.style.display = "inline";
        });
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
