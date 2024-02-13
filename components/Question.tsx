'use client'

import { Select } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateQuestionTitle, updateQuestionType } from '@/redux/formSlice'
import ShortAnswer from './qtypes/ShortAnswer'
import Choice from './qtypes/Choice'
import Paragraph from './qtypes/Paragraph'
import Checkbox from './qtypes/Checkbox'
import Dropdown from './qtypes/Dropdown'
import Edit from './Edit'

const data = [
  {
    title: 'Short Answer',
    file: <ShortAnswer />,
  },
  {
    title: 'Paragraph',
    file: <Paragraph />,
  },
  {
    title: 'Multiple Choice',
    file: <Choice />,
  },
  {
    title: 'Checkboxes',
    file: <Checkbox />,
  },
  {
    title: 'Dropdown',
    file: <Dropdown />,
  },
]

const Question = ({
  index,
  value,
  addQuestion,
  handleDelete,
  isActiveQuestion,
}: {
  index: number
  value: { title: string; type: string; choices?: string[] | undefined }
  addQuestion: () => void
  handleDelete: () => void
  isActiveQuestion: boolean
}) => {
  const dispatch = useDispatch()
  const { title, type } = value // Assuming value contains title and type

  const handleChange = (newValue: string) => {
    dispatch(updateQuestionTitle({ index, title: newValue }))
  }

  const handleTypeChange = (value: string) => {
    dispatch(updateQuestionType({ index, type: value }))
  }

  const qType = data.find((elem) => elem.title === type)

  return (
    <div className="flex md:flex-row flex-col justify-center items-center w-full max-w-3xl mx-auto">
      <div
        className={`border rounded-md my-6 border-gray-300 bg-white max-w-2xl shadow w-full grid place-items-center lg:place-items-start lg:ml-10 mx-auto`}
      >
        <div className="w-full md:px-6 px-2 flex md:flex-row flex-col md:justify-between justify-center items-center gap-8 py-6">
          <input
            type="text"
            value={title}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Question"
            required
            className="text-base px-4 outline-none capitalize border-b bg-gray-100 focus:border-b-2 border-gray-400 pt-3 pb-2 w-full focus:border-[#29A0B1]"
          />
          <Select
            placeholder="Select Question Type"
            style={{ width: 300 }}
            onChange={handleTypeChange}
            value={type}
            options={[
              { value: 'Short Answer', label: 'Short Answer' },
              { value: 'Paragraph', label: 'Paragraph' },
              { value: 'Multiple Choice', label: 'Multiple Choice' },
              { value: 'Checkboxes', label: 'Checkboxes' },
              { value: 'Dropdown', label: 'Dropdown' },
            ]}
          />
        </div>
        {qType && <div className="w-full">{qType.file}</div>}
      </div>
      {isActiveQuestion && (
        <Edit handleAdd={addQuestion} handleDelete={handleDelete} />
      )}
    </div>
  )
}

export default Question
