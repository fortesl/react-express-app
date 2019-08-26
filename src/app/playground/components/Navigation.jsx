import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div>
        <h1>Expensify</h1>
        <div style={{marginBottom: '50px'}}>
            <NavLink to="/">Home</NavLink>{' '}
    |       <NavLink to="/dashboard">Dashboard</NavLink>{' '}
    |       <NavLink to="/create">Create Expense</NavLink>
        </div>
    </div>
);
 
export default Navigation;