import Image from 'next/image'
import React from 'react'
import add from "../public/add.svg"
import del from "../public/del.svg"

const Edit = ({handleAdd, handleDelete, show}:any) => {
  return (
    <div className='bg-gray-50/80 shadow p-2 ml-2 rounded-md'>
        <div onClick={handleAdd} className='border-b py-2 border-gray-200 cursor-pointer hover:text-[#1D9B69]'>
          <Image src={add} alt="" width={25} height={25}/>
        </div>
        {!show && <div onClick={handleDelete} className='cursor-pointer py-2 hover:text-red-400'>
        <Image src={del} alt="" width={25} height={25}/>
        </div>}
    </div>
  )
}

export default Edit