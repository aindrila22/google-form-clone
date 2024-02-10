'use client'
import React, { useState } from 'react'

const Checkbox = () => {
  const [checkboxInputs, setCheckboxInputs] = useState(['Option 1'])

  const addCheckboxInput = () => {
    const newCheckboxInputs = [
      ...checkboxInputs,
      `Option ${checkboxInputs.length + 1}`,
    ]
    setCheckboxInputs(newCheckboxInputs)
  }

  const removeCheckboxInput = (index: any) => {
    const updatedCheckboxInputs = [...checkboxInputs]
    updatedCheckboxInputs.splice(index, 1)
    setCheckboxInputs(updatedCheckboxInputs)
  }

  const handleInputChange = (index: any, value: any) => {
    const updatedCheckboxInputs = [...checkboxInputs]
    updatedCheckboxInputs[index] = value
    setCheckboxInputs(updatedCheckboxInputs)
  }

  return (
    <div className="w-full md:px-8 px-2 grid place-items-center md:block py-1 mb-6">
      <button
        className="my-4 text-[#29A0B1] font-bold"
        onClick={addCheckboxInput}
      >
        Add Multiple Checkboxes
      </button>

      {checkboxInputs.map((option, index) => (
        <div
          className="py-2 md:gap-4 flex justify-start items-center"
          key={index}
        >
          <input
            type="checkbox"
            id={`checkbox${index}`}
            name={`checkboxGroup`}
            value={option}
          />
          <label className="pl-1 text-base" htmlFor={`checkbox${index}`}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="focus:border-b focus:border-gray-400 outline-none"
            />
          </label>
          <button
            className="text-pink-800 font-medium"
            onClick={() => removeCheckboxInput(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Checkbox
