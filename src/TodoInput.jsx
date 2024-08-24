import { useState } from 'react'

// ToDoInput component
function ToDoInput({inputValue, setInputValue}){

    // Function to handle input change
    function handleInputChange(event){
        setInputValue(event.target.value); // Update the input value
    }

    return (
        <div>
            <h1 className="Title">My To Do List</h1>
            {/* Input field for entering new to-do items */}
            <input type="text" className='Main textBar' value={inputValue} onChange={handleInputChange} />
        </div>
    )
}

export default ToDoInput