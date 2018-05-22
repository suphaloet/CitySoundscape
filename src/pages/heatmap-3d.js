import React, { Component } from 'react';

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch/heatmap3d';
class Heatmap3D extends Component {
    render(){
        return (
            <div><h1> Heatmap 3D</h1>
            <P5Wrapper sketch={sketch}/>
            </div>
        );
    }
}

export default Heatmap3D;