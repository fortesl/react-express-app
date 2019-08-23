import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import {Provider} from 'react-redux';
import ExpenseList from './components/ExpenseList';
import React from 'react';
import ReactDOM from 'react-dom';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', note: 'August 2019 water bill', amount: 12000}));
store.dispatch(addExpense({description: 'Gas Bill', note: 'August 2019 gas bill', amount: 6500}));
store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
        <ExpenseList info="prop not from state"/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


