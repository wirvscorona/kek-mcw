import * as React from 'react';
import App from './App';
import Diary from './Diary'
import Navigation from './Navigation';
import MovementMap from './MovementMap';
import SymptomMap from './SymptomMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = _ => (
    <Router>
        <Navigation/>
        <Switch>
            <Route path='/'>
                <App/>
            </Route>
        </Switch>
        <Switch>
            <Route path='/diary'>
                <Diary/>
            </Route>
        </Switch>
        <Switch>
            <Route path='/map/matching' className='movement-map'>
                <MovementMap className='movement-map'/>
            </Route>
        </Switch>
        <Switch>
            <Route path='/map/heat'>
                <SymptomMap/>
            </Route>
        </Switch>
    </Router>
)

export default AppRouter;