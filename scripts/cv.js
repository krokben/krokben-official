// Expand CV
var cvItem = document.getElementsByClassName("cv-item");

for (var i = 0; i < cvItem.length; i++) {
    cvItem[i].addEventListener("click", function() {
        expandItem(this.innerHTML);
        if (this.style.color === "orange") {
            this.style.color = "rgb(0, 0, 0)";
        }
        else {
            this.style.color = "orange";
        }
    });
}

function expandItem(x) {
    if (document.getElementById(x).style.display === "inline-block") {
        document.getElementById(x).style.display = "none";
    }
    else {
        document.getElementById(x).style.display = "inline-block";
    }
}

// Transition between hands and CV/About
var cvRightHand = document.getElementById("cv-righthand");
var cvLeftHand = document.getElementById("cv-lefthand");
var cvCube = document.getElementById("cvCube");
var omCube = document.getElementById("omCube");
var hands = document.getElementById("hands");
var cvContainer = document.getElementById("cvContainer");
var goBack = document.getElementById("goBack");

cvRightHand.addEventListener("click", function() {
    hands.style.opacity = "0";
    hands.addEventListener("transitionend", function() {
        hands.style.display = "none";
        omContainer.style.display = "none";
        cvContainer.style.display = "flex";
        cvContainer.style.opacity = "1";
        goBack.style.display = "inline";
    });
});

cvLeftHand.addEventListener("click", function() {
    hands.style.opacity = "0";
    hands.addEventListener("transitionend", function() {
        hands.style.display = "none";
        cvContainer.style.display = "none";
        omContainer.style.display = "flex";
        omContainer.style.opacity = "1";
        goBack.style.display = "inline";
    });
});

cvCube.addEventListener("click", function() {
    cvContainer.style.opacity = "0";
    cvContainer.addEventListener("transitionend", function() {
        cvContainer.style.display = "none";
        omContainer.style.display = "none";
        hands.style.display = "block";
        hands.style.opacity = "1";
        goBack.style.display = "none";
    });
});

omCube.addEventListener("click", function() {
    omContainer.style.opacity = "0";
    omContainer.addEventListener("transitionend", function() {
        omContainer.style.display = "none";
        cvContainer.style.display = "none";
        hands.style.display = "block";
        hands.style.opacity = "1";
        goBack.style.display = "none";
    });
});

goBack.addEventListener("click", function() {
    if (cvContainer.style.display === "flex") {
        cvContainer.style.opacity = "0";
        cvContainer.addEventListener("transitionend", function() {
            cvContainer.style.display = "none";
            omContainer.style.display = "none";
            hands.style.display = "block";
            hands.style.opacity = "1";
            goBack.style.display = "none";
        });
    }
    else {
        omContainer.style.opacity = "0";
        omContainer.addEventListener("transitionend", function() {
            omContainer.style.display = "none";
            cvContainer.style.display = "none";
            hands.style.display = "block";
            hands.style.opacity = "1";
            goBack.style.display = "none";
        });
    }
});
