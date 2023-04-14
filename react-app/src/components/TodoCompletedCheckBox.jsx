// import {React, useState, useRef} from 'react'

// export default function TodoCompletedCheckBox() {
//     const [todoList, setTodoList] = useState([])
//     const todo = useRef()
//     const handleClick = () => 
//         setTodoList(prev => ([...prev, {taskName: todo.current.value, completed: false}]))
//     const taskCompleted = ({target}) =>
//         setTodoList(prev => ({...prev, completed: target.value}))
//     return (
//       <div>
//         <input type="text" ref = {todo}/>
//         <button onClick={handleClick}></button>
//         <ul>
//           {todoList.map({todo.taskName}, index) =>(
//               <li key={index}>
//                 {todo}
//                 {/* <input type='checkbox' onChange={taskCompleted}></input> */}
//               </li> 
//           ))} 
//         </ul>
//       </div>
//     )
// }

