import React, { useState } from "react"



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
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks