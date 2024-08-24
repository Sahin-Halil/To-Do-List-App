import { useState, useEffect } from 'react'

function ToDoList( {inputValue} ){
    const [list, setList] = useState(() => {
        return JSON.parse(localStorage.getItem("myList")) || [];
    });
    
    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(list));
        console.log("list updated");    
    }, [list]);

    function handleButtonClick(event){
        setList([...list, inputValue]);
    }

    return (
        <div>
            <button onClick={(e) => handleButtonClick(e)}>Add</button>
            <ul>
                {list.map((data, index) => { return <li key={index}>{data}</li> })}
            </ul>
        </div>  
    )
}

export default ToDoList