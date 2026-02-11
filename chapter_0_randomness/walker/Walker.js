/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.tx = 0;
        this.ty = 10000;
    }

    show() {
        stroke(2);
        fill(127);
        stroke(0);
        circle(this.x, this.y, 48)
    }

    step() {
        // let choice = floor(random(4));
        // let xstep = random(-1, 1);
        // let ystep = random(-1, 1);
        // if (choice === 0) {
        // this.x++; // Move right
        // } else if (choice === 1) {
        // this.x--; // Move left
        // } else if (choice === 2) {
        // this.y++; // Move down (computer graphics, we read left to right, top to bottom)
        // } else {
        // this.y--; // Move up
        // }
        // this.x += xstep;
        // this.y += ystep;

        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, width);


        this.tx += 0.01;
        this.ty += 0.01;
        // let xstep = randomGaussian(0, 3);
        // let ystep = randomGaussian(0, 3);


    }
}