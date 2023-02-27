import React, { useState } from 'react'

export default function Details() {

    const [person, setPerson] = useState("")

    function updateState (e) {
        setPerson (e.target.value);
    }

  return (
    <div>
      <input type="text" onChange={updateState} />
      <p>{person}</p>
    </div>
  )
}
