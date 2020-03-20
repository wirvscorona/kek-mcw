import React from 'react';
import App from './App';
import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AppRouter = _ => (
    <Router>
        <Navigation/>
        <Switch>
            <Route path='/app'>
                <App/>
            </Route>
        </Switch>
        <Switch>
            <Route path='/diary'>
                <App/>
            </Route>
        </Switch>
    </Router>
)

export default AppRouter;