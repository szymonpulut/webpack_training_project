import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import './index.scss';

const app = (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));
