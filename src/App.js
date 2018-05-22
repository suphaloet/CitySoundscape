import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarLayout from './components/Navbar-layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Heatmap3D from './pages/heatmap-3d';
import Graph from './pages/graph';
import heatmap2d from './pages/heatmap-2d';
class App extends Component {
  render() {
    return (
      <div>
        <NavbarLayout />
        <Router>
        <div className="App">
          <Route path="/" exact strict render={()=>{return(<Redirect to="/heatmap3d/"/>);}}/>
          <Route path="/heatmap3d/" exact strict component={ Heatmap3D }/>
          <Route path="/heatmap2d/" exact strict component={ heatmap2d} />
          <Route path="/graph/" exact strict component={ Graph }/>
        </div>
      </Router>
      </div>
      
    );
  }
}

export default App;
