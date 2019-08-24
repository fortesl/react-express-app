import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const TaskList  = ({groupName, tasks}) => {
    return (  
        <div>
            <h3>{groupName}</h3>
            {tasks.map((task, index) => (
                <p key={index}>{task.name}</p>
            ))}
        </div>
    );
};

TaskList.propTypes = {
    tasks: propTypes.array,
    groupName: propTypes.string
};
 
const mapStateToProps = (state, ownProps) => {
    const groupId = ownProps.id;
    return {
        groupName: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    };
};

export default connect(mapStateToProps)(TaskList);