import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch/heatmap2d';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as firebase from 'firebase';

class Heatmap2D extends React.Component {
    db;
    date=[];
    constructor(){
       super();
       this.db = firebase.database();
        this.db.ref('calculate/date/date').once('value').then(snapshot=>{
            snapshot.forEach(snap=>{
                let option = {
                    value: snap.val(),
                    label: snap.val()
                }
                this.date.push(option);
            });
        });

    }
    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        var options = this.date;
        return (
            <div><h1> Heatmap 2D</h1>
                <Select
                    id="test"
                    name="form-field-name"
                    value={value}
                    onChange={this.handleChange}
                    options={options}
                />
                <P5Wrapper sketch={sketch} />
            </div>
        );
    }
}

export default Heatmap2D;