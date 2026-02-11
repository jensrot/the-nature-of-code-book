let amountOfIterations = 500;
let headsCount = 0;
let tailsCount = 0;
let totalFlips = 0;

let headsProbability = 0.5;

let isHeads = false;
let isTails = false;

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

    // Determine winner after all flips are done
    if (totalFlips === amountOfIterations && !isHeads && !isTails) {
        if (headsPercentage > tailsPercentage) {
            isHeads = true;
        } else {
            isTails = true;
        }
    }

    // Display results
    fill(255);
    text(`Total Flips: ${totalFlips}`, width / 2, height / 2 - 80);
    text(`Heads: ${headsCount} (${headsPercentage}%)`, width / 2, height / 2 - 40);
    text(`Tails: ${tailsCount} (${tailsPercentage}%)`, width / 2, height / 2);
    text(`Expected: ${headsProbability * 100}% heads`, width / 2, height / 2 + 40);

    // Show winner after all flips are done
    if (totalFlips === amountOfIterations) {
        fill(255, 255, 0); // Yellow for the result
        textSize(32);
        if (isHeads) {
            text("HEADS WINS!", width / 2, height / 2 + 100);
        } else if (isTails) {
            text("TAILS WINS!", width / 2, height / 2 + 100);
        }
        textSize(24); // Reset text size
    }
}