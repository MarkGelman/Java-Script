import {React, useState } from 'react'

export default function AddToList() {
    const [counterArray, setCounterArray] = useState ([])

    const handleClick = () =>{
        setCounterArray(prev=>[...prev, prev.length])
    }
  return (
    <div>
      <button onClick ={handleClick}>+</button>
      <ul>
        {counterArray.map(item =>(
            <li key={item}>{item}</li>
        ))} 
      </ul>
    </div>
  )
}
