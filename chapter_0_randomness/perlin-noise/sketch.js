// TODO: implement with sliders

let time = 0.0;
let incrementValue = 0.01; // Or 0.1 is les smooth

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    let xoff = time;
    noFill();
    stroke(0);
    strokeWeight(2);
    beginShape();

    for (let i = 0; i < width; i++) {
        let y = noise(xoff) * height; // Up and down

        xoff += incrementValue
            ;
        vertex(i, y);
    }
    endShape();
    time += incrementValue;
}