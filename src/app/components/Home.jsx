import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => ( 
    <div>
        <Link to="/"><h2>Home</h2></Link>
    </div> 
);

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Home);