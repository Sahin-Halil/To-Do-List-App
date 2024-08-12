import { useState } from 'react'
import './App.css'

function ToDoList(){
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event){
        setInputValue(event.target.value);
    }   
    console.log(inputValue);
    return (
        <div>
            <h1>My To Do List</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    )
}

export default ToDoList