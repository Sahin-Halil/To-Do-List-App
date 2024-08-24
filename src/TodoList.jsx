import { useState, useEffect } from 'react'

function ToDoList( {inputValue} ){
    const [list, setList] = useState(() => {
        return JSON.parse(localStorage.getItem("myList")) || [];
    });
    
    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(list));
    }, [list]);

    function handleButtonClick(event){
        if (inputValue === "") {
            return;
        }
        setList([...list, inputValue]);
    }

    function handleDeleteClick(event, index){
        const newList = list.filter((data, i) => i !== parseInt(index));
        setList(newList);
    }

    return (
        <div>
            <button onClick={(e) => handleButtonClick(e)}>Add</button>
            <ul>
                {list.map((data, index) => { return <li key={index}>{data} <button onClick={(e) => handleDeleteClick(e, index)}>X</button> </li> })}
            </ul>
        </div>  
    )
}

export default ToDoList