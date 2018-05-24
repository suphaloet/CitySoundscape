import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import * as firebase from 'firebase';
class Graph extends Component {
    week = [];

    day = [];
    constructor(props) {
        super(props);
        const db = firebase.database();
        const dbRef = db.ref().child('slip');
        let date = [];
        let labels = [];

        for (let i = 0; i < 24; i++) {
            labels.push(i.toString() + ':00');
        }
        labels.push('0:00');
        db.ref('/calculate/date/date').once('value').then(snapshot => {
            snapshot.forEach(snap => {
                date.push(snap.val());
            });
            for (let i = 0; i < date.length; i++) {
                if (i < 14) {
                    let css = [];
                    let time = [];
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
                    db.ref().child('slip/' + date[i]).once('value').then(snap => {
                        snap.forEach(doc => {
                            css_01.push(doc.val().css_db_01);
                            css_02.push(doc.val().css_db_02);
                            css_03.push(doc.val().css_db_03);
                            css_04.push(doc.val().css_db_04);
                            css_05.push(doc.val().css_db_05);
                            css_06.push(doc.val().css_db_06);
                            css_07.push(doc.val().css_db_07);
                            css_08.push(doc.val().css_db_08);
                            css_09.push(doc.val().css_db_09);
                            css_10.push(doc.val().css_db_10);
                            css_11.push(doc.val().css_db_11);
                            time.push(doc.val().time);

                        });
                        let pushData = [
                            css_01,
                            css_02,
                            css_03,
                            css_04,
                            css_05,
                            css_06,
                            css_07,
                            css_08,
                            css_09,
                            css_10,
                            css_11,
                            time
                        ]
                        this.day.push(pushData);
                        this.updateGraphFirst();


                    });
                }
            }


        });




        this.drawGraph(labels);
    }

    updateGraphFirst(){
        let allData = this.day;
        console.log(allData);
    }


    drawGraph(labels) {
        this.state = {
            chartData: {
                labels: labels,
                datasets: [
                    {
                        label: 'Mo',
                        data: [40, 45, 57, 54, 23, 45, 64, 38, 42, 54, 37, 66, 72, 57, 54, 45, 66, 77, 52, 63, 66, 54, 56, 43, 40],
                        fill: false,
                        borderColor: "rgb(255, 204, 0)",
                        lineTension: 0.1

                    },
                    {
                        label: 'Tu',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        borderColor: "rgb(252, 0, 255)",
                        lineTension: 0.1

                    },
                    {
                        label: 'Wu',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        borderColor: "rgb(99, 175, 175)",
                        lineTension: 0.1
                    },
                    {
                        label: 'Th',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        borderColor: "rgb(255, 150, 0)",
                        lineTension: 0.1

                    },
                    {
                        label: 'Fr',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        borderColor: "rgb(0, 180, 255)",
                        lineTension: 0.1

                    },
                    {
                        label: 'Sa',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        borderColor: "rgb(150, 0, 255)",
                        lineTension: 0.1

                    },
                    {
                        label: 'Su',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        borderColor: "rgb(255, 0, 0)",
                        lineTension: 0.1

                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        };
    }


    fetchData() {
        let week1 = this.week[0];
        console.log(week1);
    }

    render() {
        return (
            <div className="container">
                <h1>Graph</h1>
                <Line
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        );


    }


}

export default Graph;