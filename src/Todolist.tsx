import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type PropsType = {
    title: string
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void,
    addTask: (title: string) => void,

}


function Todolist(props: PropsType) {
    let [newTaskTitle, setNewTaskTitle] = useState("");

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(newTaskTitle)
            setNewTaskTitle("");
        }

    }
    const addTaskHandler=()=>{
        props.addTask(newTaskTitle)
        setNewTaskTitle("");
    }
    return (
        <div className={"task"}>
            <h1>{props.title}</h1>
            <div className={"input_button"}>
                <input type="text"
                       value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyPress}
                />
                <button onClick={addTaskHandler}>+
                </button>
            </div>
            <div className={"task_list"}>
                {
                    props.tasks.map(t => {
                        return <div key={t.id}>
                            <input
                                checked={t.isDone}
                                type="checkbox"/>{t.title}
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>X
                            </button>
                        </div>
                    })
                }
            </div>
            <div>
                <button onClick={() => {
                    props.changeFilter("all")
                }}>all
                </button>
                <button onClick={() => {
                    props.changeFilter("active")
                }}>active
                </button>
                <button onClick={() => {
                    props.changeFilter("completed")
                }}>completed
                </button>
            </div>
        </div>
    );
}

export default Todolist;