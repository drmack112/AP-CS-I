function setup() {
    createCanvas(400, 400);
}

// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

function draw() {
    background(127, 204, 255);

    fill(66, 66, 66);
    ellipse(200, y, 50, 50);

    // move the ball
    y = y + speed;
};