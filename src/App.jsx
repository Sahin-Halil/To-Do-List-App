import { useState } from 'react'
import './App.css'
import ToDoInput from './TodoInput'
import ToDoList from './TodoList'

// Main App component
function App() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      {/* Render the ToDoInput component and pass inputValue and setInputValue as props */}
      <ToDoInput inputValue = {inputValue} setInputValue = {setInputValue}/>
      {/* Render the ToDoList component and pass inputValue as a prop */}
      <ToDoList inputValue = {inputValue}/>
    </div>
  )
}

export default App
