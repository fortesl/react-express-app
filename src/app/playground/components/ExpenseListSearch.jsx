import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setTextFilter } from '../actions/filters';

const ExpenseListSearch = (props) => ( 
    <div>
        <input type="text" placeholder="Search" value={props.filters.text} 
            onChange={(e) => props.dispatch(setTextFilter(e.target.value)) } />
    </div>
);
    
ExpenseListSearch.propTypes = {
    filters: propTypes.object,
    dispatch: propTypes.func
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListSearch);