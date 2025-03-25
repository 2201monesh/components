import React from 'react'
import { IoIosSearch } from "react-icons/io";

function FilterDropdown() {
  return (
    <div className='w-[180px] h-[240px] border mt-1 rounded-[6px] border border-[#27272A] bg-[#09090B] flex flex-col'>
      <div className='w-[100%] h-[40px] border border-[#27272A] rounded-t-[6px] flex items-center px-3'>
        <IoIosSearch className='mr-2' size={20}/>
        <input className='w-[80%] outline-none' placeholder='Filter status...' name="" id="" />
      </div>  
      <p className='w-[100%] h-[40px] flex items-center px-3 hover:bg-[#27272A]'>Backlog</p>
      <p className='w-[100%] h-[40px] flex items-center px-3 hover:bg-[#27272A]'>Todo</p>
      <p className='w-[100%] h-[40px] flex items-center px-3 hover:bg-[#27272A]'>In Progress</p>
      <p className='w-[100%] h-[40px] flex items-center px-3 hover:bg-[#27272A]'>Done</p>
      <p className='w-[100%] h-[40px] rounded-b-[6px] flex items-center px-3 hover:bg-[#27272A]'>Canceled</p>
    </div>
  )
}

export default FilterDropdown
