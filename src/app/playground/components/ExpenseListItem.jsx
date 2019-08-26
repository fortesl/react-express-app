/* eslint-disable quotes */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <tr>
        <td>{moment(props.expense.createdAt).format('MMM Do, YYYY')}</td>
        <td><Link to={`/edit?id=${props.expense.id}`}>{props.expense.description}</Link></td>
        <td>${props.expense.amount/100}</td>
        <td>{props.expense.note}</td>
        <td>
            <button 
                onClick={() => 
                    props.dispatch(removeExpense(props.expense.id))}>Remove
            </button>
        </td>
    </tr>
);

ExpenseListItem.propTypes = {
    expense: propTypes.object.isRequired,
    dispatch: propTypes.func
};

export default connect()(ExpenseListItem);
