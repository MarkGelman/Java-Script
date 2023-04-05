<<<<<<< HEAD
import React from 'react';

function MySelect(defaultOption, options, value, onChange) {
    return (
        <div>
            <select >
                <option value="">{defaultOption}</option>
                <option 
                    value={value}
                    onChange = {e => onChange(e.target.value)}>
                    {options.map(option )}
                </option>
            </select>
        </div>
    );
}

export default MySelect;
=======
import React from 'react'

export default function MySelect({options, defaultValue, 
    value, onChange}) {

  return (
    <div>
       <select 
        value= {value}
        onChange={event => onChange(event.target.value)}
        >
          <option disabled value="">{defaultValue}</option>
          {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    </div>
  )
}
>>>>>>> 41cbd08422b0d4c07953db788cdbfd66bc0f72c9
