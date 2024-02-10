// Import necessary modules and components

"use client";

import React, { useState } from "react";

// Define the Dropdown component
const Dropdown = () => {
  const [selectOptions, setSelectOptions] = useState(["Option 1"]);

  const addSelectOption = () => {
    const newSelectOptions = [
      ...selectOptions,
      `Option ${selectOptions.length + 1}`,
    ];
    setSelectOptions(newSelectOptions);
  };

  const handleSelectChange = (index: any, value: any) => {
    const updatedSelectOptions = [...selectOptions];
    updatedSelectOptions[index] = value;
    setSelectOptions(updatedSelectOptions);
  };

  return (
    <div className="w-full px-8 py-1 mb-6">
      <button className="my-4" onClick={addSelectOption}>
        Add Multiple Choices
      </button>

      {selectOptions.map((option, index) => (
        <div className="py-2 gap-4 flex justify-start items-center" key={index}>
          <select
            value={option}
            onChange={(e) => handleSelectChange(index, e.target.value)}
            className="outline-none border-b focus:border-gray-400"
          >
            {selectOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

// Export the Choice component
export default Dropdown;
