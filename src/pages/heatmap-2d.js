import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch/heatmap2d';
class Heatmap2D extends React.Component{
    render(){
        return(
            <div><h1> Heatmap 2D</h1>
            <P5Wrapper sketch={sketch}/>
            </div>
        );
    }
}

export default Heatmap2D;