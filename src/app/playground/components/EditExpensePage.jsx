import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import propTypes from 'prop-types';

const EditExpensePage = (props) => { 
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
                expense={props.expense} 
                editSubmittedExpense={(updates) => {
                    props.dispatch(editExpense(props.expense.id, updates));
                    props.history.push('/dashboard');
                }}
            />
            <button 
                onClick={() => {
                    props.dispatch(removeExpense(props.expense.id));
                    props.history.push('/dashboard');
                }}
            >
                Remove
            </button>

        </div>
    );
};

EditExpensePage.propTypes = {
    dispatch: propTypes.func.isRequired,
    history: propTypes.object.isRequired,
    expense: propTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => (
    {
        expense: state.expenses.find(({id}) => id === ownProps.match.params.id)
    }
);

export default connect(mapStateToProps)(EditExpensePage);
