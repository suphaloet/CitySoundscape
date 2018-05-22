import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
var firebaseConfig = {
    apiKey: "AIzaSyCEa_NYYESX5zuju-LBCtCe-xdVnw6VTeg",
    authDomain: "city-soundscape.firebaseapp.com",
    databaseURL: "https://city-soundscape.firebaseio.com",
    projectId: "city-soundscape",
    storageBucket: "city-soundscape.appspot.com",
    messagingSenderId: "738098349114"
  };
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
