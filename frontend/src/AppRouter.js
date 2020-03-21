import * as React from 'react';
import App from './App';
import Diary from './Diary'
import Navigation from './Navigation';
import MovementMap from './MovementMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                <Diary/>
            </Route>
        </Switch>
        <Switch>
            <Route path='/map'>
                <MovementMap/>
            </Route>
        </Switch>
    </Router>
)

export default AppRouter;