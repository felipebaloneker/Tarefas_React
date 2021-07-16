import React, { useState } from 'react';
import './AddTask.css';
import Tasks from './Tasks'
import Button from './Button';

const AddTask = ({handleTaskAddition}) =>{
    const [inputData,setInputData] = useState("");
    
    const handleInputChanges = (e) =>{
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
    }

    return (
        <div className='add-task-container'>
            <input onChange={handleInputChanges} className='add-task-input' type="text" value={inputData}/>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>

    ); 
}; 

export default AddTask;