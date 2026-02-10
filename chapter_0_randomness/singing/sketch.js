
let num;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(24);
    num = random(0.1, 1);
}


function draw() {
    background(100);

    fill(255);

    if (num < 0.6) {
        text("Sing!", width / 2, height / 2 - 20);
    } else if (num < 0.7) {
        text("Dance!", width / 2, height / 2 + 20)
    } else {
        text("Sleep!", width / 2, height / 2 + 80)
    }
}