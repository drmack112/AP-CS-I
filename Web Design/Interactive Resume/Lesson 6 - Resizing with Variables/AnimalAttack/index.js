function setup() {
    createCanvas(400, 400);
}

var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW / 2;

function draw() {

    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY - 70, faceW, 47); // face?
}