import React from 'react';
import './Task.css';
import {CgClose, CgInfo} from 'react-icons/cg'

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    return(
        <div className="task-container" 
        style={task.completed ? {borderLeft:"1vh solid chartreuse "} : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>
                    <CgClose />
                </button>
                <button className="see-task-details-button">
                    <CgInfo />
                </button>
            </div>
        </div>
    );
    //return <div className="task-container">{task.title}</div>;
};

export default Task;