import * as firebase from 'firebase';
export default function sketch(p) {
    let img;
    let mapScreenWidth;
    let mapScreenHeight;
    p.setup = function () {
        p.createCanvas(1500, 1061);
        img = p.loadImage("/imgs/floor4.jpg");
        p.smooth();
        mapScreenWidth = p.width;
        mapScreenHeight = p.height;
    };

    p.draw = function () {
        p.image(img, 0, 0, mapScreenWidth, mapScreenHeight);
    };
};