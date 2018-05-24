import * as firebase from 'firebase';
export default function sketch(p) {
    let w;
    let h;
    let cols, rows;
    let scl = 20;
    p.setup = function () {
        p.createCanvas(600, 600, p.WEBGL);
        w = 600;
        h = 600;
        cols = w / scl;
        rows = h / scl;
        p.frameRate(7);
    };

    p.draw = function () {
        p.background(0);
        p.stroke(255);
        p.noFill();
        p.translate(w / 2, h / 2);
        p.rotateX(p.PI / 3);
        p.translate(-w / 2, -h / 2);
        for (let y = 0; y < cols; y++) {
            p.beginShape(p.line);
            for (let x = 0; x < rows; x++) {
                p.vertex(x * scl, y * scl, p.random(-50, 50));
                p.vertex(x * scl, (y + 1) * scl, p.random(-50, 50));
            }
            p.endShape();
        }
    };
};