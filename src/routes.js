import React from 'react';
import {Home, Search} from './components';
import {Route, Switch} from 'react-router-dom';

export default (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route exact path="/search" component={Search}/>
	</Switch>
);