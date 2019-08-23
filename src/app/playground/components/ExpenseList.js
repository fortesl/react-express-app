import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const ExpenseList = (props) => ( 
    <div>
        <h1>Expense List</h1>
        <table>
            <thead>
                <tr><th>Date</th><th>Description</th><th>Amount</th><th>Note</th></tr>
            </thead>
            <tbody>
                { 
                    props.expenses.map((expense, index) => 
                        <tr key={index}>
                            <td>{new Date(expense.createdAt).getMonth()+1}/{new Date(expense.createdAt).getDate()}</td>
                            <td>{expense.description}</td>
                            <td>${expense.amount/100}</td>
                            <td>{expense.note}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
);

ExpenseList.propTypes = {
    expenses: propTypes.array,
    info: propTypes.string
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseList);
