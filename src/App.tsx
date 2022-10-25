import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

function App() {
    let task1:Array<TaskType>=[
        {id:1,title:"CSS", isDone:false},
        {id:2,title:"React", isDone:true},
        {id:3,title:"MobX", isDone:false},
    ]
    let task2:Array<TaskType>=[
        {id:1,title:"Redux", isDone:false},
        {id:2,title:"HTML", isDone:true},
        {id:3,title:"SCSS", isDone:false},
    ]
  return (
    <div className="App">
        <Todolist
            title={"What to learn"}
            tasks={task1}/>
        <Todolist
            title={"What to learn"}
            tasks={task2}/>

    </div>
  );
}

export default App;
