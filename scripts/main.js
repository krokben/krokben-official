// Show the hidden menu
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

// Make active page active in navbar
var hem = document.getElementById("hem");
var portfolio = document.getElementById("portfolio");
var cv = document.getElementById("cv");
var goBack = document.getElementById("goBack");

var urlsearch = location.search;

if (urlsearch === "?p=home") {
    if (hem.className.search(" active") === -1) {
        hem.className += " active";
    }
    if (portfolio.className.search(" active") !== -1) {
        portfolio.className.replace(" active", "");
    }
    if (cv.className.search(" active") !== -1) {
        cv.className.replace(" active", "");
    }
}
else if (urlsearch === "?p=portfolio" || urlsearch === "?p=gallery" || urlsearch === "?p=websites" || urlsearch === "?p=code") {
    if (portfolio.className.search(" active") === -1) {
        portfolio.className += " active";
    }
    if (hem.className.search(" active") !== -1) {
        hem.className.replace(" active", "");
    }
    if (cv.className.search(" active") !== -1) {
        cv.className.replace(" active", "");
    }
}
else if (urlsearch === "?p=cv") {
    if (cv.className.search(" active") === -1) {
        cv.className += " active";
    }
    if (hem.className.search(" active") !== -1) {
        hem.className.replace(" active", "");
    }
    if (portfolio.className.search(" active") !== -1) {
        portfolio.className.replace(" active", "");
    }
}

// Make goBack arrow appear
if (urlsearch === "?p=gallery" || urlsearch === "?p=websites" || urlsearch === "?p=code") {
    goBack.style.display = "inline";
}

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
