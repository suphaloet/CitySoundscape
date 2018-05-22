import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import * as firebase from 'firebase';
class Graph extends Component {
    constructor(props) {
        super(props);
        const db = firebase.database();
        const dbRef = db.ref().child('slip');
        let date = [];
        db.ref('/calculate/date/date').once('value').then(snapshot => {
            snapshot.forEach(snap => {
                date.push(snap.val());
            });
            let day = [];
            for (let i = 0; i < date.length; i++) {
                db.ref().child('slip/' + date[i]).once('value').then(snap => {
                    snap.forEach(doc=>{
                        
                    });
                });
            }



        });
        this.drawGraph();
    }


    drawGraph() {
        this.state = {
            chartData: {
                labels: [],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],

                }]
            }
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Graph</h1>
                <Line
                    data={this.state.chartData}
                />
            </div>
        );


    }


}

export default Graph;