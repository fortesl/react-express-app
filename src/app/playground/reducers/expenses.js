const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) =>
{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [action.expense, ...state];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id !== action.id ? expense : {...expense, ...action.updates});
        default:
            return state;
    }
};