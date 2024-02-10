import React from 'react'

const ShortAnswer = () => {
  return (
    <div className="w-full px-6 py-1 mb-6">
    <input
      type="text"
     // onChange={(e) => setDesc(e.target.value)}
      //value={desc ?? ""}
      required
      placeholder="Short Answer"
      className="text-base outline-none font-medium capitalize border-b 
      focus:border-b-2 border-gray-200 focus:border-[#1D9B69] py-1 w-full"
    />
    </div>
  )
}

export default ShortAnswer