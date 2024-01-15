//var video;
//
//function setup() {
//    createCanvas(640 * 2, 480);
//    pixelDensity(1);
//    video = createCapture(VIDEO);
//    video.hide();
//    noStroke();
//    angleMode(DEGREES);
//}
//
//function draw() {
//    background(0);
//    image(video, 0, 0);
//
//    video.loadPixels();
//
//    translate(640, 0);
//    var arcSize = 20;
//    translate(arcSize / 2, arcSize / 2);
//
//    for (var y = 0; y < video.height; y += arcSize) {
//        for (var x = 0; x < video.width; x += arcSize) {
//
//            // Calculate index in the pixel array
//            var index = (x + y * video.width) * 4;
//
//            // Extract RGB values
//            var r = video.pixels[index];
//            var g = video.pixels[index + 1];
//            var b = video.pixels[index + 2];
//
//            // Calculate brightness
//            var pixelBrightness = (r + g + b) / 3;
//            push();
//            translate(x, y);
//            var theta = map(pixelBrightness, 0, 255, 0, 360);
//            rotate((180 - theta) / 2);
//            arc(0, 0, arcSize, arcSize, 0, theta);
//            pop();
//        }
//    }
//}
var video;

function setup() {
    createCanvas(640 * 2, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.hide();
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    background(0);
    image(video, 0, 0);

    video.loadPixels();

    translate(640, 0);
    var arcSize = 20;
    translate(arcSize / 2, arcSize / 2);

    for (var y = 0; y < video.height; y += arcSize) {
        for (var x = 0; x < video.width; x += arcSize) {

            // Calculate index in the pixel array
            var index = (x + y * video.width) * 4;

            // Extract RGB values
            var r = video.pixels[index];
            var g = video.pixels[index + 1];
            var b = video.pixels[index + 2];

            // Calculate brightness
            var pixelBrightness = (r + g + b) / 3;

            // Simulate wooden mirror effect
            fill(139, 69, 19, map(pixelBrightness, 0, 255, 50, 255)); // Brown color with varying transparency

            // Replace the arc with another graphics primitive, let's use ellipse
            push();
            translate(x, y);
            var diameter = map(pixelBrightness, 0, 255, arcSize / 2, arcSize);
            ellipse(0, 0, diameter, diameter);
            pop();
        }
    }
}
