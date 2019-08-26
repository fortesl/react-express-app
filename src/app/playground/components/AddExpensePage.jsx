import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import propTypes from 'prop-types';

const AddExpensePage = (props) => ( 
    <div>
        <h1>Create Expense</h1>
        <ExpenseForm addSubmittedExpense={(expense) => { 
            props.dispatch(addExpense(expense));
            props.history.push('/dashboard');
        }}                
        />
    </div>
);
 
AddExpensePage.propTypes = {
    dispatch: propTypes.func,
    history: propTypes.object
};

export default connect()(AddExpensePage);
