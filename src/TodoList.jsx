import { useState } from 'react'

function ToDoList( {inputValue} ){
    const [list, setList] = useState([]);

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