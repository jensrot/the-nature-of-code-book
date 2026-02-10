let amountOfIterations = 500;
let headsCount = 0;
let tailsCount = 0;
let totalFlips = 0;

let headsProbability = 0.5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(24);
}

function draw() {
    background(100);

    // flip coin
    if (totalFlips < amountOfIterations) {
        let flip = random(1);
        if (flip < headsProbability) {
            headsCount++;
        } else {
            tailsCount++;
        }
        totalFlips++;
    }

    // calculate percentages
    let headsPercentage = (headsCount / totalFlips * 100).toFixed(1);
    let tailsPercentage = (tailsCount / totalFlips * 100).toFixed(1);

    // Display results
    fill(255);
    text(`Total Flips: ${totalFlips}`, width / 2, height / 2 - 60);
    text(`Heads: ${headsCount} (${headsPercentage}%)`, width / 2, height / 2 - 20);
    text(`Tails: ${tailsCount} (${tailsPercentage}%)`, width / 2, height / 2 + 20);
    text(`Expected: ${headsProbability * 100}% heads`, width / 2, height / 2 + 60);
}