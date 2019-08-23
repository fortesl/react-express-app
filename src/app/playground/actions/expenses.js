import uuid from 'uuid';

export const addExpense = (
    {
        description, 
        note ='', 
        amount = 0,
        createdAt = new Date().getTime()
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        description,
        note,
        amount,
        id: uuid(),
        createdAt    
    } 
});

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpenses = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
