import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
export type FilterValuesType="all"|"completed"|"active";
function App() {

let [tasks, setTasks]=useState<Array<TaskType>>([
    {id:1,title:"CSS", isDone:false},
    {id:2,title:"React", isDone:true},
    {id:3,title:"MobX", isDone:false},
]);
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

    let removeTask=(id:number)=>{
     let filteredTasks=tasks.filter(t=>t.id!==id);
     setTasks(filteredTasks);
    }

  return (
    <div className="App">
        <Todolist
            title={"What to learn"}
            tasks={taskForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
        />


    </div>
  );
}

export default App;
