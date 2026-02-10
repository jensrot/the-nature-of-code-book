let randomCounts = [];
let randomColors = [];

let total = 40;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < total; i++) {
        randomCounts[i] = 0;
        console.log(randomCounts[i]);
        randomColors[i] = color(random(255), random(255), random(255));
    }
}

function draw() {
    background(200);
    let index = floor(random(randomCounts.length));
    randomCounts[index]++;
    stroke(0);

    console.log(randomCounts)

    let w = width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
        fill(randomColors[x]);
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}