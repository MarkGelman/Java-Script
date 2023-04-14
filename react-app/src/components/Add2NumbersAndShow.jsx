import { number } from 'prop-types'
import React from 'react'

export default function Add2NumbersAndShow({num1, num2}) {

  return (
    <div style={{width: 100, height: 100, backgroundColor: "orange", margin: 5}}>

            <b >{num1} + {num2} = {num1 +num2}</b>
    </div>
  )
}

Add2NumbersAndShow.propTypes = {
    num1: number.isRequired,
    num2: number.isRequired
}
   