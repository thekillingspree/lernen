import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../pages/Home'
import Login from '../pages/Login';
import QuestionPage from '../pages/QuestionPage';
const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route exact={true} path={"/login"} component={Login} />
            <Route path={"/Q"} component={QuestionPage} />
        </Switch>
    </Router>
);

export default AppRouter;
export {history};