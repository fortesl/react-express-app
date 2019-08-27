import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: props.startDate,
            endDate: props.endDate,
            focusedInput: null
        };
    }

    onDateChange = ( { startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (focusedInput) => this.setState({ focusedInput });

    render() {
        return ( 
            <DateRangePicker 
                startDate= {this.props.startDate}
                endDate= {this.props.endDate}
                onDatesChange={this.onDateChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange={() => false}
            />
        );    
    }
}
    
ExpenseListRange.propTypes = {
    dispatch: propTypes.func.isRequired,
    startDate: propTypes.object.isRequired,
    endDate: propTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        startDate: state.filters.startDate,
        endDate: state.filters.endDate
    };
};

export default connect(mapStateToProps)(ExpenseListRange);
