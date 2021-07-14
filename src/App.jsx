import React, { useState } from "react";
import './App.css';
import AddTask from './components/AddTask'; 
import Tasks from './components/Tasks';

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

  return(
      <>
        <div className="container">
          <Tasks tasks={tasks} />
          <AddTask />
        </div>
      </>
  );
};

export default App;
