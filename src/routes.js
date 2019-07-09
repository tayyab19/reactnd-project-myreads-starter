import React from 'react';
import {Home, Search} from './components';
import {Route, Switch} from 'react-router-dom';
import {URL} from './utils/constants';

export default (
    <Switch>
        <Route exact path={URL} component={Home}/>
        <Route exact path={`${URL}/search`} component={Search}/>
    </Switch>
);