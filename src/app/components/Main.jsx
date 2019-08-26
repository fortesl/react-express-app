import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Dashboard from './Dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import Navigation from './Navigation';

const Main = () => ( 
    <div>
        <Router history={history}>
            <Provider store={store}>
                <Navigation />
                <Route 
                    exact 
                    path="/dashboard"
                    render={ ()=> <Dashboard /> } />
            </Provider>
        </Router>        
    </div>
);

export default Main;
 