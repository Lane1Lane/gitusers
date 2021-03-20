import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from './../components/DashboardPage';
import User from './../components/User';
import NotFoundPage from './../components/NotFoundPage';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/user/:id" component={User}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;