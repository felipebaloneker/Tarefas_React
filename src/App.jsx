import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';

import AddTask from './components/AddTask'; 
import Tasks from './components/Tasks';
import Header from './components/Header'

let App = () =>{
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title:'Estudar Programação',
      completed:false,
    },
    {
      id:'2',
      title:'Ler Livros',
      completed:false,
    }
  ]);
  
  const handleTaskClick = (taskId)=>{
    const newTasks = tasks.map((task) =>{
      if(task.id === taskId) return { ...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks, {
      title:taskTitle,
      id: uuidv4(),
      completed:false,
    }]
    setTasks(newTasks);
  };

  const handleTaskDelete = (taskId) =>{
    const newTasks = tasks.filter(task =>task.id !== taskId)

    setTasks(newTasks);
  }

  return(
      <>
        <div className="container">
          <Header />
          <AddTask handleTaskAddition = {handleTaskAddition} />
          <Tasks tasks={tasks} handleTaskClick = {handleTaskClick} 
            handleTaskDelete ={handleTaskDelete}
          />
        </div>
      </>
  );
};

export default App;
