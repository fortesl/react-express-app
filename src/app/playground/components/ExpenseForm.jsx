import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
    };

    getFormatedExpense = () => ({
        description: this.state.description,
        note: this.state.note,
        amount: this.state.amount * 100,
        createdAt: this.state.createdAt.valueOf()
        
    });
    
    componentDidMount() {
        !this.props.expense || this.setState( {
            ...this.props.expense,
            amount: this.props.expense.amount / 100
        });
    }

    onDescriptionChange = (e) => {
        e.preventDefault();
        this.setState( {
            description: e.target.value
        });
    }

    onAmountChange = (e) => {
        e.preventDefault();
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState( {
                amount: e.target.value
            });    
        }
    }   

    onNoteChange = (e) => {
        e.preventDefault();
        this.setState( {
            note: e.target.value
        });
    }

    onSubmitExpense = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState( {
                error: 'Please provide description and amount.'
            });
        } else {
            this.setState( { error: ''});
            this.props.addSubmittedExpense(this.getFormatedExpense());
        }
    } 

    onDateChange = (createdAt) => !createdAt || this.setState({ createdAt });
    onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused});

    render() {
        return (
            <div>
                { this.state.error && <h3 style={{color: 'red'}}>{this.state.error}</h3> }
                <form>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <input 
                        type="text" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange} >                            
                    </textarea>
                    <button
                        onClick={this.onSubmitExpense}>Add Expense</button>
                </form>
            </div>
        );
    }
}

ExpenseForm.propTypes = {
    addSubmittedExpense: propTypes.func.isRequired,
    expense: propTypes.object
};

export default ExpenseForm;
