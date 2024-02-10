import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto items-center w-full max-w-7xl px-6 h-20">
      <div className="flex justify-center items-center gap-5 text-lg text-[#29A0B1] md:text-2xl font-extrabold tracking-wider">
        createforms
      </div>
      <div className="flex justify-center items-start gap-5">
        <div>New</div>
        <div>Responses</div>
      </div>
    </div>
  )
}

export default Navbar
