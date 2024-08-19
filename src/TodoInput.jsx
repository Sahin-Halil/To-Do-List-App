import { useState } from 'react'


function ToDoInput({inputValue, setInputValue}){

    function handleInputChange(event){
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h1>My To Do List</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    )
}

export default ToDoInput