import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(newTaskTitle)
            setNewTaskTitle("");
        }

    }
    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle("");
    }
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }
    return (
        <div className={"task"}>
            <h1>{props.title}</h1>
            <div className={"input_button"}>
                <input type="text"
                       value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <div className={"task_list"}>
                {
                    props.tasks.map(t => {
                        const removeHandler = () => {
                            props.removeTask(t.id)
                        }

                        return <div key={t.id}>
                            <input
                                checked={t.isDone}
                                type="checkbox"/>{t.title}
                            <button onClick={removeHandler}>X</button>
                        </div>
                    })
                }
            </div>
            <div>
                <button onClick={onAllClickHandler}>all</button>
                <button onClick={onActiveClickHandler}>active</button>
                <button onClick={onCompletedClickHandler}>completed</button>
            </div>
        </div>
    );
}

export default Todolist;