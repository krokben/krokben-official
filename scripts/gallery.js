var gallery = document.getElementsByClassName("gallery-item");
var lightbox = document.querySelector(".lightbox");
var lightboxDiv = document.querySelector(".lightboxDiv");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
// var bod = document.body;

var mq = window.matchMedia("(min-width: 600px)");

// Display clicked image in lightbox
for (var i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener("click", function() {
        if (mq.matches) { // Check if user is on a screen wider than 600px before displaying lightbox
        lightbox.style.opacity = 1;
        lightbox.style.display = "flex";
        lightboxDiv.innerHTML = this.innerHTML;
        bod.style.overflow = "hidden"; // Prevent page from scrolling
        }
        // Change to next or previous image when user clicks arrows
        leftArrow.addEventListener("click", function() {
            var x = lightboxDiv.innerHTML;
            var a = x.slice(0, 17);
            var b = Number(x.substr(17, 1));
            var c = x.slice(18);
            if (b !== 1) {
            lightboxDiv.innerHTML = a + (b - 1) + c;
            }
            else {
                leftArrow.style.cursor = "default";
            }
        });

        rightArrow.addEventListener("click", function() {
            var x = lightboxDiv.innerHTML;
            var a = x.slice(0, 17);
            var b = Number(x.substr(17, 1));
            var c = x.slice(18);
            if (b < gallery.length) {
            lightboxDiv.innerHTML = a + (b + 1) + c;
            }
            else {
                rightArrow.style.cursor = "default";
            }
        });
    });
}

// If user clicks on lightbox, hide lightbox
lightboxDiv.addEventListener("click", function() {
    lightbox.style.opacity = 0;
    lightbox.style.display = "none";
    bod.style.overflow = "auto"; // Make page scrollable again
});
