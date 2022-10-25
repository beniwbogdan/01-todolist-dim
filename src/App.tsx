import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

function App() {

let [tasks, setTasks]=useState([
    {id:1,title:"CSS", isDone:false},
    {id:2,title:"React", isDone:true},
    {id:3,title:"MobX", isDone:false},
])
    let removeTask=(id:number)=>{
     let newTasks=tasks.filter(t=>t.id!==id);
     setTasks(newTasks);
    }
  return (
    <div className="App">
        <Todolist
            title={"What to learn"}
            tasks={tasks}
            removeTask={removeTask}
        />


    </div>
  );
}

export default App;
