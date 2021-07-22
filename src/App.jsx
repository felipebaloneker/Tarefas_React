import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddTask from './components/AddTask'; 
import Tasks from './components/Tasks';
import Header from './components/Header'
import TaskDetails from './components/TaskDetails'
import axios from "axios";

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
// Link com APi chamando o Banco de Dados
  useEffect(()=>{
    const fetchTasks = async () =>{
      const{data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
        setTasks(data);
    };
    fetchTasks();
  })
  // Marcando Tarefa como Completa
  const handleTaskClick = (taskId)=>{
    const newTasks = tasks.map((task) =>{
      if(task.id === taskId) return { ...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks);
  };
  // Adding Tasks and random id
  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks, {
      title:taskTitle,
      // random id library 
      id: uuidv4(),
      completed:false,
    }]
    setTasks(newTasks);
  };

  // Deleting Task by id
  const handleTaskDelete = (taskId) =>{
    const newTasks = tasks.filter(task =>task.id !== taskId)

    setTasks(newTasks);
  }

  return(
      <Router>
        <div className="container">
          <Header />
          {/* Home Page  */}
          <Route 
          path="/"
          exact 
          render = {() => (
                <>
                  <AddTask handleTaskAddition = {handleTaskAddition} />
                  <Tasks tasks={tasks} handleTaskClick = {handleTaskClick} 
                  handleTaskDelete ={handleTaskDelete}
                  />
                </>
            )}
          />
          {/* Information Page */}
          <Route 
          path="/:taskTitle"
          exact
          component={TaskDetails}
          />
        </div>
      </Router>
  );
};

export default App;
