import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType="all"|"completed"|"active";
function App() {

let [tasks, setTasks]=useState<Array<TaskType>>([
    {id:v1(),title:"CSS", isDone:false},
    {id:v1(),title:"React", isDone:true},
    {id:v1(),title:"MobX", isDone:false},
]);
    console.log(tasks)
let [filter, setFilter]=useState<FilterValuesType>("all");

let changeFilter=(value:FilterValuesType)=>{
setFilter(value)
}
let taskForTodolist = tasks;
    if (filter==="completed"){
        taskForTodolist=tasks.filter(t=>t.isDone);

    }
    if (filter==="active"){
        taskForTodolist=tasks.filter(t=>!t.isDone);

    }

    let removeTask=(id:string)=>{
     let filteredTasks=tasks.filter(t=>t.id!==id);
     setTasks(filteredTasks);
    }
    let addTask=()=>{
        let newTask={id:v1(),title:"MobX", isDone:false};
        setTasks([...tasks,newTask]);
    }

  return (
    <div className="App">
        <Todolist
            title={"What to learn"}
            tasks={taskForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
        />


    </div>
  );
}

export default App;
