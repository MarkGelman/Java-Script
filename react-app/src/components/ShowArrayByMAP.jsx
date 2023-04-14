import React from 'react'

export default function ShowArray() {
    const arrName = ['yosi', 'moshe', 'avi', 'igal'];
  return (
    <div>
      <ol>
        {arrName.map((name, index) => 
                <li key={index}>
                    {name}
                </li>
            )}
      </ol>
    </div>
  )
}
