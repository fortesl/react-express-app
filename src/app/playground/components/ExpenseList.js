import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => ( 
    <div>
        <h1>Expense List</h1>
        <table>
            <thead>
                <tr><th>Date</th><th>Description</th><th>Amount</th><th>Note</th></tr>
            </thead>
            <tbody>
                { 
                    props.expenses.map((expense) => 
                        <ExpenseListItem key={expense.id} expense={expense} />
                    )
                }
            </tbody>
        </table>
    </div>
);

ExpenseList.propTypes = {
    expenses: propTypes.array
};

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
