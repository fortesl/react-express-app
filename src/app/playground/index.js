import { createStore } from 'redux';
import actionTypes from './action-types';

//Action generators
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: actionTypes.INCREMENT,
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1            
});

const setCount = ({count = 0}) => ({
    type: actionTypes.SET,
    setTo: count
});

//Reducer. Pure function - never change state or action
const countReducer = (state = { count: 0}, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                count: state.count + action.incrementBy 
            };
        case actionTypes.SET:
            return {
                count: action.setTo
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);
store.subscribe(() => {
    new Error(store.getState());
});

store.dispatch(setCount({ count: -5555}));
store.dispatch(incrementCount({ incrementBy: 10}));
