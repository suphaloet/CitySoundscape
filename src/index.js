import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { FAB } from 'react-material-design';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FAB 
    location="floating-bottom-right"
    icon="create_new_folder"
  />, document.getElementById('root'));
registerServiceWorker();
