import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';

const jsx = (
    <Provider store={store}>
        <Dashboard/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));