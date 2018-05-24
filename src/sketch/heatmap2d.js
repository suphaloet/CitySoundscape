import * as firebase from 'firebase';
export default function sketch(p) {
    let img;
    let mapScreenWidth;
    let mapScreenHeight;
    let db;
    let css_01 = [];
    let css_02 = [];
    let css_03 = [];
    let css_04 = [];
    let css_05 = [];
    let css_06 = [];
    let css_07 = [];
    let css_08 = [];
    let css_09 = [];
    let css_10 = [];
    let css_11 = [];
    let time = [];
    let count = 0;
    let circleSize = 150;
    let opacity = 100;
    let dataCount = 0;
    let min = 0;
    let max = 0;
    p.setup = function () {
        p.createCanvas(1500, 1061);
        img = p.loadImage("/imgs/floor4.jpg");
        p.smooth();
        mapScreenWidth = p.width;
        mapScreenHeight = p.height;
        db = firebase.database().ref('/slip/2018-04-12').once('value').then(snapshot => {
            snapshot.forEach(snap => {

                css_01.push(snap.val().css_db_01);
                css_02.push(snap.val().css_db_02);
                css_03.push(snap.val().css_db_03);
                css_04.push(snap.val().css_db_04);
                css_05.push(snap.val().css_db_05);
                css_06.push(snap.val().css_db_06);
                css_07.push(snap.val().css_db_07);
                css_08.push(snap.val().css_db_08);
                css_09.push(snap.val().css_db_09);
                css_10.push(snap.val().css_db_10);
                css_11.push(snap.val().css_db_11);
                time.push(snap.val().time);
                dataCount++;



            });

        });
    };
    p.drawCircle = function (data, x, y) {
        let color;
        if (data < 40) {
            color = [5, 105, 255, opacity];
        } else if (data >= 40 && data < 60) {
            color = [252, 204, 0, opacity];
        }
        else if (data >= 60 && data < 70) {
            color = [255, 134, 5, opacity];
        } else {
            color = [255, 0, 0, opacity];
        }
        p.fill(color);
        p.ellipse(x, y, circleSize + data * 2, circleSize + data * 2);
        p.fill(0);
        p.textSize(32);
        p.text(data, x, y);
    }
    p.draw = function () {
        p.image(img, 0, 0, mapScreenWidth, mapScreenHeight);


        if (count < time.length) {
            p.drawCircle(css_11[count], 650, 320);
            p.drawCircle(css_10[count], 970, 350);
            p.drawCircle(css_09[count], 750, 370);
            p.drawCircle(css_08[count], 850, 400);
            p.drawCircle(css_07[count], 800, 500);
            p.drawCircle(css_06[count], 600, 570);
            p.drawCircle(css_05[count], 800, 600);
            p.drawCircle(css_04[count], 700, 600);
            p.drawCircle(css_03[count], 850, 690);
            p.drawCircle(css_02[count], 800, 770);
            p.drawCircle(css_01[count], 700, 770);



            p.noStroke();
            p.fill(125);
            p.textSize(60);
            p.text('2018-04-12', 200, 100);
            p.text(time[count], 200, 200);
            count++;
        }
    };

    p.test = function () {

    }


};