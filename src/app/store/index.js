import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState';

const reducer = (state= defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
export const store = createStore(reducer);
