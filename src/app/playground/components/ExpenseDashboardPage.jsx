import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListSorting from './ExpenseListSorting';

const ExpenseDashboardPage = () => ( 
    <div>
        <ExpenseListFilters />
        <ExpenseListSorting />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
