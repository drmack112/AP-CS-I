function setup() {
    createCanvas(400, 400);
}


function draw() {

    noStroke();
    var x = 200;
    var y = 200;
    var faceSize = 160;

    // ears
    var earSize = faceSize * 1 / 2;
    fill(89, 52, 17);
    ellipse(x - faceSize * 2 / 5, y - faceSize * 2 / 5, earSize, earSize);
    ellipse(x + faceSize * 2 / 5, y - faceSize * 2 / 5, earSize, earSize);

    // face
    fill(163, 113, 5);
    ellipse(x, y, faceSize, faceSize);



    //eyes 
    fill(0, 0, 0);
    ellipse(160, 180, 20, 20);
    ellipse(240, 180, 20, 20);



    //nose
    fill(89, 52, 20);
    ellipse(x, y + faceSize / 8, faceSize * 4 / 15, faceSize / 5);
}