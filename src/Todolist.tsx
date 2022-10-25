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
                {
                    props.tasks.map(t=>{
                        return <div>
                            <input
                                checked={t.isDone}
                                type="checkbox"/>{t.title}
                        </div>
                    })
                }
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