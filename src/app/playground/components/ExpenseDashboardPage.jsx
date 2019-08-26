import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListSearch from './ExpenseListSearch';
import ExpenseListSort from './ExpenseListSort';
import ExpenseListRange from './ExpenseListRange';

const ExpenseDashboardPage = () => ( 
    <div>
        <ExpenseListSearch />
        <ExpenseListSort />
        <ExpenseListRange />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
