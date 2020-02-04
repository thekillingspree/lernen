
import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../pages/Home'
import Login from '../pages/Login';
import QuestionPage from '../pages/QuestionPage';
import Dashboard from '../pages/Dashboard'
import SignUp from '../pages/SignUp';
import VideoPages from '../pages/VideoPages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminOnlyRoute from './AdminOnlyRoute';
import CreateNewCourse from '../pages/CreateNewCourse';
import AdminDashboard from '../pages/AdminDashboard';
import AddVideo from '../pages/AddVideo';

const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/Q"} component={QuestionPage} />
            <PublicRoute path={"/login"} component={Login} />
            <PublicRoute path={"/signup"} component={SignUp} />
            <PrivateRoute path={"/dashboard"} component={Dashboard} />
            <AdminOnlyRoute path={"/admin/dashboard"} component={AdminDashboard} />
            <AdminOnlyRoute path={"/admin/new"} component={CreateNewCourse} />
            <AdminOnlyRoute path={"/admin/:cid/add"} component={AddVideo} />
            <PrivateRoute path={"/:cid/learn/:vid"} component={VideoPages} />        
        </Switch>
    </Router>
);

export default AppRouter;
export {history};