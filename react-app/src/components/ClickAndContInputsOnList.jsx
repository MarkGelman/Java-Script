import React, { useRef, useState } from 'react'

// export default function ClickAndContInputsOnList() {
//     const [fullName, setFullName] = useState("");
//     const first= useRef();
//     const last = useRef();
    
//   const handleClick = () => {
//     setFullName(first.current.value + " " + last.current.value);
//   }

//   return (
//     <div>
//         <input type="text" placeholder='First name' ref={first}/>
//         <input type="text" placeholder='Last name' ref = {last}/>
//         <button onClick={handleClick}>Send</button>
//         <h1 style={{textAlign:'center'}}>{fullName}</h1>
//     </div>
//   )
// }

export default function ClickAndContInputsOnList() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
  
    
  const handleClick = () => {
    setFullName(firstName + " " + lastName);
  }

  return (
    <div>
        <input type="text" placeholder='First name' onChange={(e) => setFullName(e.target.value + " " + lastName)}/>
        <input type="text" placeholder='Last name' onChange={(e) => setFullName( firstName + " " + e.target.value)}/>
        <h1 style={{textAlign:'center'}}>{fullName}</h1>
    </div>
  )
}
