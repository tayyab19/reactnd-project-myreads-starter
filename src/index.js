import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import App from './App';

import { createBrowserHistory } from 'history';

const MainApp = () => (
    <Router history={createBrowserHistory()}>
        <App/>
    </Router>
);

ReactDOM.render(<MainApp/>, document.getElementById('root'));
