/// <reference types="p5/global" />

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        let choice = floor(random(4));
        // let xstep = random(-1, 1);
        // let ystep = random(-1, 1);
        if (choice === 0) {
            this.x++; // Move right
        } else if (choice === 1) {
            this.x--; // Move left
        } else if (choice === 2) {
            this.y++; // Move down (computer graphics, we read left to right, top to bottom)
        } else {
            this.y--; // Move up
        }
        // this.x += xstep;
        // this.y += ystep;
    }
}