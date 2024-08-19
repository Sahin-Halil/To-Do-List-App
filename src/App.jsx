import { useState } from 'react'
import './App.css'
import ToDoInput from './TodoInput'
import ToDoList from './TodoList'

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>

      <ToDoInput inputValue = {inputValue} setInputValue = {setInputValue}/>
      <ToDoList inputValue = {inputValue}/>

    </div>
  )
}

export default App
