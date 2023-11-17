var images = [], x = -1;
images[0] = "assets/deans.jpg";
images[1] = "assets/medals.jpg";
images[2] = "assets/interiit1.jpg";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("carousel-img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("carousel-img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}