import React from "react";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import {Route} from "react-router-dom";

export default (
	<React.Fragment>
		<Route exact path="/" component={Home}/>
		<Route exact path="/search" component={Search}/>
	</React.Fragment>
);