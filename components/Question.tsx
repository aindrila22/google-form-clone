import { Select } from "antd";
import React, { useState } from "react";
import ShortAnswer from "./qtypes/ShortAnswer";
import Choice from "./qtypes/Choice";
import Paragraph from "./qtypes/Paragraph";
import Checkbox from "./qtypes/Checkbox";
import Dropdown from "./qtypes/Dropdown";
import Edit from "./Edit";

const data = [
  {
    title: "Short Answer",
    file: <ShortAnswer />,
  },
  {
    title: "Paragraph",
    file: <Paragraph />,
  },
  {
    title: "Multiple Choice",
    file: <Choice />,
  },
  {
    title: "Checkboxes",
    file: <Checkbox />,
  },
  {
    title: "Dropdown",
    file: <Dropdown />,
  },
];

const Question = ({
  index,
  value,
  onUpdate,
  addQuestion,
  handleDelete,
  isActiveQuestion,
}: any) => {
  const [qType, setQtype] = useState<any>();
  const [questionTitle, setQuestionTitle] = useState(value);

  const handleChange = (newValue: string) => {
    setQuestionTitle(newValue);
    onUpdate(index, newValue);
  };

  const handleTypeChange = (value: string) => {
    const x = data?.find((elem) => elem.title === value);
    setQtype(x);
  };

  return (
    <div className="flex justify-center items-center w-full max-w-3xl mx-auto ">
      <div
        className={`${
          isActiveQuestion &&
          "border-l-4 border-[#1D9B69] rounded-md my-6 bg-white max-w-2xl shadow w-full grid place-items-start ml-10 mx-auto"
        }border rounded-md my-6 border-gray-300 bg-white max-w-2xl shadow w-full grid place-items-start ml-10 mx-auto`}
      >
        <div className="w-full px-6 flex justify-between items-center gap-8 py-6">
          <input
            type="text"
            value={questionTitle}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Question"
            required
            className="text-base px-4 outline-none capitalize border-b bg-gray-100
        focus:border-b-2 border-gray-400 pt-3 pb-2 w-full focus:border-[#1D9B69]"
          />
          <Select
            placeholder="Select Question Type"
            style={{ width: 300 }}
            onChange={handleTypeChange}
            options={[
              { value: "Short Answer", label: "Short Answer" },
              { value: "Paragraph", label: "Paragraph" },
              { value: "Multiple Choice", label: "Multiple Choice" },
              { value: "Checkboxes", label: "Checkboxes" },
              { value: "Dropdown", label: "Dropdown" },
            ]}
          />
        </div>
        {qType && <div className="w-full">{qType.file}</div>}
      </div>
      {isActiveQuestion && (
        <Edit handleAdd={addQuestion} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Question;
