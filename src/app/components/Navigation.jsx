import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => ( 
    <div style={{marginBottom: '30px'}}>
        <Link to="/">Home</Link>{' | '}
        <Link to="/dashboard">Application</Link>
    </div> 
);

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Navigation);
