import React from 'react'
import Add2NumbersAndShow from './Add2NumbersAndShow'

export default function AddNumbers() {
  return (
    <div>
          {/* <input type="text" /> */}
      <Add2NumbersAndShow num1={3} num2={1}/>
      <Add2NumbersAndShow num1={10} num2={1}/>
      <Add2NumbersAndShow num1={12} num2={3}/>
    </div>
  )
}
