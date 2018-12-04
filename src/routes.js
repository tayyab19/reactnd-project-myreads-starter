import React from 'react';
import {Home, Search} from './components';
import {Route} from 'react-router-dom';

export default (
	<React.Fragment>
		<Route exact path="/" component={Home}/>
		<Route exact path="/search" component={Search}/>
	</React.Fragment>
);