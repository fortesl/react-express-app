import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Dashboard from './Dashboard';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../store/history';
import Navigation from './Navigation';

const Main = () => ( 
    <div>
        <Router history={history}>
            <Provider store={store}>
                <Navigation />
                <Switch>
                    <Route exact path="/" render={()=>(<div>Hello world!</div>)} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route render={()=>(<div>Not Found - !404</div>)} />
                </Switch>
            </Provider>
        </Router>        
    </div>
);

export default Main;
 