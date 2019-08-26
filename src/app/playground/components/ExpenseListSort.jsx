import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListSort = (props) => ( 
    <div>
        Sort by: {' '}
        <select 
            value = {props.filters.sortBy}
            onChange={ (e) => 
                e.target.value === 'date'
                    ? props.dispatch(sortByDate())
                    : props.dispatch(sortByAmount())}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>    
    </div>
);
    
ExpenseListSort.propTypes = {
    dispatch: propTypes.func,
    filters: propTypes.object
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListSort);