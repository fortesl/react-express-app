import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import initData from '../store/demoData';
import Navigation from './Navigation';
import HelloWorld from './Hello';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import NotFoundPage from './NotFound';

const store = configureStore();
initData(store);

const Main = () => (
    <Router history={createBrowserHistory()}>
        <Provider store={store}>
            <Navigation />
            <Switch>
                <Route exact path="/" component={HelloWorld} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Provider>
    </Router>
);

export default Main;