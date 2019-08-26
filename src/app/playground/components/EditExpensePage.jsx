import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import propTypes from 'prop-types';

class EditExpensePage extends React.Component { 

    propTypes = {
        dispatch: propTypes.func,
        match: propTypes.object
    }

    expenseId

    componentDidMount() {
        this.expenseId = this.props.match.params.id;

    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm expense={this.expenseId} editSubmittedExpense={(expense) => 
                    this.props.dispatch(editExpense(expense.id, { ...expense, amount: expense.amount * 100 }))}/>
            </div>
        );
    }
}

export default connect()(EditExpensePage);
