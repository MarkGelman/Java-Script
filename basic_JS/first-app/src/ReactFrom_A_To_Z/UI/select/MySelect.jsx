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