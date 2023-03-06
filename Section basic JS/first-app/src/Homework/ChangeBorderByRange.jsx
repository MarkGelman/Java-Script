import React, { useState } from 'react'

export default function ChangeBorderByRange() {

    const [border,setBorder] = useState(0)

  return (
    <>
    <div style={{width: 250, heigh:250}}>
      <div style={{
            widty:100, 
            height:100, 
            backgroundColor: "red",
            border:`${border} "solid black`}}>

        </div>
    </div>

        <input type="range" value={border} 
            onChange={(e)=>{
                setBorder(e.target.value);
            }}
        />
    
    </>
  )
}
