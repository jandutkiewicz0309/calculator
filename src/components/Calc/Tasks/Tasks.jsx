import React, { useState } from "react"
import Task from "./Task"



const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'ary',
            text: 'Ar',
            result: '',
        },
        {
            id: 2,
            name: 'hektar',
            text: 'He',
            result: '',
        },
        {
            id: 3,
            name: 'centimeter',
            text: 'Cm',
            result:'',
        },
        {
            id:4,
            name: 'meters',
            text: 'm',
            result:'',
        }
    ])
    return(
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task}/>
            ))}
        </>
    )
}

export default Tasks