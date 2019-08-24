import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TaskList from './TaskList';

const Dashboard = ({groups}) => ( 
    <div>
        <h1>Dashboard</h1>
        {
            groups.map((group, index) => (
                <div key={index}>
                    <TaskList name={group.name} id={group.id}/>
                </div>        
            ))
        }
    </div>
);

Dashboard.propTypes = {
    groups: propTypes.array
};

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    };
};

export default connect(mapStateToProps)(Dashboard);