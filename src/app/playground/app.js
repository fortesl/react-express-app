import 'react-dates/initialize';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import initData from './store/demoData';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navigation from './components/Navigation';
import HelloWorld from './components/Hello';

const store = configureStore();
initData(store);


const jsx = (
    <Router history={createBrowserHistory()}>
        <Provider store={store}>
            <Navigation />
            <Route exact path="/" component={HelloWorld} />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/create" render={()=> <AddExpensePage />} />
        </Provider>
    </Router>
);

ReactDOM.render(jsx, document.getElementById('app'));


