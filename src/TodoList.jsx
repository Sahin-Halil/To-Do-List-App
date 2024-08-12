import { useState } from 'react'
import './App.css'

function ToDoList(){
    return (
        <div>
            <h1>My To Do List</h1>
            <input type="text" placeholder="Enter a task" />
            <button>Add</button>
        </div>
    )
}

export default ToDoList