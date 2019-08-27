import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState';

const reducer = (state= defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
