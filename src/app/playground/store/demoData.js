import { addExpense } from '../actions/expenses';

export default (store) => {

    store.dispatch(addExpense(
        {
            description: 'Water Bill', 
            note: 'August 2019 water bill', 
            amount: 15000,
            createdAt: new Date().getTime() - 86400000*100
        }));
    store.dispatch(addExpense(
        {
            description: 'Gas Bill', 
            note: 'August 2019 gas bill', 
            amount: 6500
        }));
    store.dispatch(addExpense(
        {
            description: 'Rent', 
            note: 'Rent bill', 
            amount: 216500,
            createdAt: new Date().getTime() - 86400000*200
        }));    
};
