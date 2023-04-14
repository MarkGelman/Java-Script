import React from 'react'

export default function FilterArray() {
    const Numbers = [1,32,3,235,23,5,23,6,8,423,7,43,3]
    const bigThan20InNumbers = Numbers.filter(number => number > 20)
    const evenInNumbers = Numbers.filter(number => number % 2 === 0)
  return (
    <div>
      <h1 style = {{textAlign: 'center'}}>Члены массива болешь 20</h1>
      {bigThan20InNumbers.map(number =>
          <p>
            {number}
          </p>  
      )}

      <h1 style = {{textAlign: 'center'}}>Чётные члены массива</h1>
      {evenInNumbers.map(number =>
          <p>
            {number}
          </p>  
      )}
      
      
    </div>
  )
}
