import { useState } from 'react'


function ToDoInput({inputValue, setInputValue}){

    function handleInputChange(event){
        setInputValue(event.target.value);
    }
    
    function handleButtonClick(event){
        console.log(inputValue);
    }

    return (
        <div>
            <h1>My To Do List</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={(e) => handleButtonClick(e)}>Add</button>
        </div>
    )
}

export default ToDoInput