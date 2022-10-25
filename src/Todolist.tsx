import React from 'react';
export type TaskType={
    id:number,
    title:string,
    isDone:boolean
}
export type PropsType={
    title:string
    tasks:Array<TaskType>
}
function Todolist(props:PropsType) {
    return (
        <div className={"task"}>
            <h1>{props.title}</h1>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <div className={"task_list"}>
                <div><input checked={props.tasks[0].isDone} type="checkbox"/>{props.tasks[0].title}</div>
                <div><input checked={props.tasks[1].isDone}type="checkbox"/>{props.tasks[1].title}</div>
                <div><input checked={props.tasks[2].isDone} type="checkbox"/>{props.tasks[2].title}</div>
            </div>
            <div>
                <button>all</button>
                <button>active</button>
                <button>completed</button>
            </div>
        </div>
    );
}

export default Todolist;