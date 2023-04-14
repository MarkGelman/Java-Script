import {React, useState} from 'react'

// export default function CountryDetails() {
    
//     const [country, setCountry] = useState({
//         name: '',
//         capital: '',
//         сontinent: ''
//     })
//   return (
//     <div>
//         <input 
//             type="text" 
//             placeholder='Name' 
//             onChange = {(e)=>

//                 setCountry(prev =>{

//                     return {
//                          ...prev,
//                          name: e.target.value 
//                     }
//                 })
//             }              
//         />

//         <input 
//             type="text" 
//             placeholder='Capital' 
//             onChange = {(e)=>

//                 setCountry(prev =>{
                    
//                     return {
//                          ...prev,
//                         capital: e.target.value 
//                     }
//                 })
//             }
//         />

//         <input 
//             type="text" 
//             placeholder='Continent' 
//             onChange = {(e)=>

//                 setCountry(prev =>{
                    
//                     return {
//                          ...prev,
//                          continent: e.target.value 
//                     }
//                 })
//             }
//         />

//         <p>{country.name}</p>
//         <p>{country.capital}</p>
//         <p>{country.continent}</p>
//     </div>
//   )
// }

export default function CountryDetails() {
    
    const [country, setCountry] = useState({
        name: '',
        capital: '',
        сontinent: ''
    })

  const handleChange = ( ({target}) => 
    setCountry(prev =>{

        return {
             ...prev,
             [target.name]: target.value 
        }
    })
  )
  return (
    <div>
        <input 
            type="text" 
            placeholder='Name' 
            onChange = {handleChange}
            name = "name"              
        />

        <input 
            type="text" 
            placeholder='Capital' 
            onChange = {handleChange}
            name = 'capital'
        />

        <input 
            type="text" 
            placeholder='Continent' 
            onChange = {handleChange}
            name = 'continent'
        />

        <p>{country.name}</p>
        <p>{country.capital}</p>
        <p>{country.continent}</p>
    </div>
  )
}