import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../pages/Home'
const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact={true} path={ "/"} component={Home} />
        </Switch>
    </Router>
);

export default AppRouter;
export {history};