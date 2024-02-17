'use client'

import { updateQuestionValue } from '@/redux/formSlice'
import { RootState } from '@/redux/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Choice = () => {
  const [radioInputs, setRadioInputs] = useState(['Option 1'])
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // State to track active index locally
  const dispatch = useDispatch()
  const activeQuestionIndex = useSelector(
    (state: RootState) => state.form.activeQuestionIndex,
  )

  // Update local active index when Redux active index changes
  React.useEffect(() => {
    setActiveIndex(activeQuestionIndex)
  }, [activeQuestionIndex])

  const addRadioInput = () => {
    const newRadioInputs = [...radioInputs, `Option ${radioInputs.length + 1}`]
    setRadioInputs(newRadioInputs)
    if (activeIndex !== null) {
      dispatch(
        updateQuestionValue({
          index: activeIndex, // Use local active index
          value: newRadioInputs,
        }),
      )
    }
  }

  const removeRadioInput = (index: number) => {
    const updatedRadioInputs = [...radioInputs]
    updatedRadioInputs.splice(index, 1)
    setRadioInputs(updatedRadioInputs)
    if (activeIndex !== null) {
      dispatch(
        updateQuestionValue({
          index: activeIndex, // Use local active index
          value: updatedRadioInputs,
        }),
      )
    }
  }

  const handleInputChange = (index: number, value: any) => {
    const updatedRadioInputs = [...radioInputs]
    updatedRadioInputs[index] = value
    setRadioInputs(updatedRadioInputs)
    if (activeIndex !== null) {
      dispatch(
        updateQuestionValue({
          index: activeIndex, // Use local active index
          value: updatedRadioInputs,
        }),
      )
    }
  }

  return (
    <div className="w-full px-2 grid place-items-center md:block lg:px-8 py-1 mb-6">
      <button className="my-4 text-[#29A0B1] font-bold" onClick={addRadioInput}>
        Add Multiple Choices
      </button>

      {radioInputs.map((option, index) => (
        <div
          className="py-2 md:gap-4 flex justify-start items-center"
          key={index}
        >
          <input
            type="radio"
            id={`radio${index}`}
            name="radioGroup"
            value={option}
          />
          <label className="pl-1 text-base" htmlFor={`radio${index}`}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="focus:border-b focus:border-gray-400 outline-none"
            />
          </label>
          <button
            className="text-pink-800 font-medium"
            onClick={() => removeRadioInput(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Choice
