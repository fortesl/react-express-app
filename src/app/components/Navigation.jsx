import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Navigation = () => ( 
    <div>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/dashboard"><h2>Application</h2></Link>
    </div> 
);

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Navigation);
