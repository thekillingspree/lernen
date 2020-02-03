import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../pages/Home'
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/login"} component={Login} />
            <Route path={"/signup"} component={SignUp} />
        </Switch>
    </Router>
);

export default AppRouter;
export {history};