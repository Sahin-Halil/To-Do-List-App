import { useState, useEffect } from 'react'

// ToDoList component
function ToDoList( {inputValue} ){
    // State to hold the list of items, initialized from localStorage 
    const [list, setList] = useState(() => {
        return JSON.parse(localStorage.getItem("myList")) || [];
    });
    
    // Effect to update localStorage whenever the list changes
    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(list));
    }, [list]);

    // Function to handle adding a new item to the list
    function handleButtonClick(event){
        if (inputValue === "") {
            return; // Do nothing if input is empty
        }
        setList([...list, inputValue]); // Add new item to the list
    }

    // Function to handle deleting an item from the list
    function handleDeleteClick(event, index){
        const newList = list.filter((data, i) => i !== parseInt(index));
        setList(newList); // Update the list
    }

    return (
        <div>
            {/* Button to add a new item */}
            <button className='Main addButton' onClick={(e) => handleButtonClick(e)}>Add</button>
            {/* List of items */}
            <ul className='itemList'>
                {list.map((data, index) =>
                    // Each item in the list with a delete button 
                    { return <li className='doItems' key={index}>{data} 
                    <button className='deleteButton' onClick={(e) => handleDeleteClick(e, index)}>X</button> 
                    </li> 
                })}
            </ul>
        </div>  
    )
}

export default ToDoList