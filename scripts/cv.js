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
