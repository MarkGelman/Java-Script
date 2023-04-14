import {React, useState, useRef} from 'react'

export default function TodoList() {
    const [todoList, setTodoList] = useState([])
    const todo = useRef()
    const handleClick = () => 
        setTodoList(prev => [...prev, todo.current.value])
  return (
    <div>
      <input type="text" ref = {todo}/>
      <button onClick={handleClick}></button>
      <ul>
        {todoList.map((todo, index) =>(
            <li key={index}>{todo}</li>
        ))} 
      </ul>
    </div>
  )
}

