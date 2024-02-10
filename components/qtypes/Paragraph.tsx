import React from 'react'

const Paragraph = () => {
  return (
    <div className="w-full px-6 py-1 mb-6">
    <textarea
      rows={3}
     // onChange={(e) => setDesc(e.target.value)}
      //value={desc ?? ""}
      required
      placeholder="Paragraph"
      className="text-base outline-none font-medium capitalize border-b 
      focus:border-b-2 border-gray-200 focus:border-[#1D9B69] py-1 w-full"
    />
    </div>
  )
}

export default Paragraph