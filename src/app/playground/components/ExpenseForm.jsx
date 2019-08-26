import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount /100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    getFormatedExpense = () => ({
        description: this.state.description,
        note: this.state.note,
        amount: this.state.amount * 100,
        createdAt: this.state.createdAt.valueOf()
        
    });
    
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
            this.props.expense 
                ? this.props.editSubmittedExpense(this.getFormatedExpense())
                : this.props.addSubmittedExpense(this.getFormatedExpense());
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
                        onClick={this.onSubmitExpense}>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
}

ExpenseForm.propTypes = {
    addSubmittedExpense: propTypes.func,
    editSubmittedExpense: propTypes.func,
    expense: propTypes.object
};

export default ExpenseForm;
