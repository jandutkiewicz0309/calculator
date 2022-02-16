import React from 'react'

 const Task = ({ task }) => {
  return (
    <div>
        <h3>{task.name}</h3>
        <p>{task.text}</p>
    </div>
  )
}

export default Task;