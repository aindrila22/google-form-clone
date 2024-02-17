'use client'
import { updateQuestionValue } from '@/redux/formSlice'
import { RootState } from '@/redux/store'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Checkbox = () => {
  const [checkboxInputs, setCheckboxInputs] = useState(['Option 1'])
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // State to track active index locally
  const dispatch = useDispatch()
  const activeQuestionIndex = useSelector(
    (state: RootState) => state.form.activeQuestionIndex,
  )

  // Update local active index when Redux active index changes
  useEffect(() => {
    setActiveIndex(activeQuestionIndex)
  }, [activeQuestionIndex])

  const addCheckboxInput = () => {
    const newCheckboxInputs = [
      ...checkboxInputs,
      `Option ${checkboxInputs.length + 1}`,
    ]
    setCheckboxInputs(newCheckboxInputs)
    if (activeIndex !== null) {
      dispatch(
        updateQuestionValue({
          index: activeIndex, // Use local active index
          value: newCheckboxInputs,
        }),
      )
    }
  }

  const removeCheckboxInput = (index: number) => {
    const updatedCheckboxInputs = [...checkboxInputs]
    updatedCheckboxInputs.splice(index, 1)
    setCheckboxInputs(updatedCheckboxInputs)
    if (activeIndex !== null) {
      dispatch(
        updateQuestionValue({
          index: activeIndex, // Use local active index
          value: updatedCheckboxInputs,
        }),
      )
    }
  }

  const handleInputChange = (index: number, value: any) => {
    const updatedCheckboxInputs = [...checkboxInputs]
    updatedCheckboxInputs[index] = value
    setCheckboxInputs(updatedCheckboxInputs)
    if (activeIndex !== null) {
      dispatch(
        updateQuestionValue({
          index: activeIndex, // Use local active index
          value: updatedCheckboxInputs,
        }),
      )
    }
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
