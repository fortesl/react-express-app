import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <div style={{marginBottom: '50px'}}>
        <Link to="/">Home</Link>{' '}
        | <Link to="/dashboard">Dashboard</Link>{' '}
        | <Link to="/create">Create Expense</Link>
    </div>
);
 
export default Navigation;