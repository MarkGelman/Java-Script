import React from 'react'

export default function Counter() {

const [counterState, setCounterState] = useState(0);

function increment() {
    setCounterState(counterState+1);
}

function decrement() {
    setCounterState(counterState-1);
}

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{counterState}</p>
    </div>
  )
}
