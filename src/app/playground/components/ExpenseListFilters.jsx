import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => ( 
    <div>
        <input type="text" placeholder="filter by:" value={props.filters.text} 
            onChange={(e) => props.dispatch(setTextFilter(e.target.value)) } />
    </div>
);
    
ExpenseListFilters.propTypes = {
    filters: propTypes.object,
    dispatch: propTypes.func
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);