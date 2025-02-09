import React from 'react';

const NumberInput = ({ value, onChange, id, labelText }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="rounded-lg p-2">
        <div className="flex items-center border border-gray-300 rounded-md p-2">
            
        <label htmlFor={id}>{labelText}</label>
        <input
                type="number"
                id={id}
                className="appearance-none border-none text-sm leading-tight rounded-md w-full"
                placeholder="Enter a number"
                value={value}
                onChange={handleChange}
            />
        </div>
        </div>
    );
};

export default NumberInput