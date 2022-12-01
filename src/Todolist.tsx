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
    changeStatus: (id: string, isDone: boolean) => void,
    filter: string,
}


function Todolist(props: PropsType) {
    let [newTaskTitle, setNewTaskTitle] = useState("");
    let [error, setError] = useState<string | null>(null);


    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            props.addTask(newTaskTitle)
            setNewTaskTitle("");
        }

    }
    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle)
            setNewTaskTitle("");
        } else {
            setError("Title is required");
        }


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
                <input className={error ? "error" : ""}
                       type="text"
                       value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={"error-message"}>Title is required</div>}
            </div>
            <div className={"task_list"}>
                {
                    props.tasks.map(t => {
                        const removeHandler = () => {
                            props.removeTask(t.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(t.id, e.currentTarget.checked);
                        }
                        return <div
                            key={t.id}
                            className={t.isDone ? "is-done" : ""}>
                            <input
                                checked={t.isDone}
                                type="checkbox"
                                onChange={onChangeHandler}
                            />{t.title}

                            <button onClick={removeHandler}>X</button>
                        </div>
                    })
                }
            </div>
            <div>
                <button
                    className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>all
                </button>
                <button
                    className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>active
                </button>
                <button
                    className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>completed
                </button>
            </div>
        </div>
    );
}

export default Todolist;