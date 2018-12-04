import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Switch} from "react-router-dom";
import App from './App';

import { createBrowserHistory } from 'history';


class MainApp extends Component {
	render() {
		return (
			<Router history={createBrowserHistory()}>
				<Switch>
					<App/>
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));
