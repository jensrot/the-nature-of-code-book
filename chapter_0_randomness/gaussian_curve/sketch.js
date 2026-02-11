let values = [85, 82, 88, 85, 86, 93, 98, 40, 73, 83];
let amount = values.length;

let total = 0;
let mean;
let variance = 60;
let sd;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

    // Calculate mean or average
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    console.log(total)
    mean = total / amount;
    console.log(mean)

    // Calculate variance
    for (let i = 0; i < values.length; i++) {
        variance += (values[i] - mean) ** 2
    }
    variance /= amount;
    sd = sqrt(variance);
}

function draw() {
    textAlign(CENTER);
    textSize(24)
    text(`average: ${mean}`, width / 2, height / 2);

    text(`standard deviation: ${sd}`, width / 2, height / 2 + 30)

    noStroke();
    fill(0, 10);
    let x = randomGaussian(mean, sd);
    // let x = mean * randomGaussian() + sd;

    fill(random(255), random(255), random(255), 10);
    circle(x, height / 2 - 60, 16);

}