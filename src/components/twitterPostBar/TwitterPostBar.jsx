import React, { useState, useEffect } from 'react'
import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";


function TwitterPostBar() {

  const [text, setText] = useState('')

  return (
    <div className='main-container w-screen h-screen flex items-center justify-center'>
      <div className='w-[30%] card-container bg-white rounded p-6 flex'>
        <div className='w-[8%]'>
            <img src="https://avatars.githubusercontent.com/u/75907582?v=4" alt="user-image" width={40} className='rounded-full' />
        </div>
        <div className='w-[92%] pl-4'>
            <textarea className='w-full textarea-input outline-none text-base mb-4' placeholder="What's happening?" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <div className='flex justify-between'>
               <div className='flex items-center'>
                <GrGallery size={20} className='cursor-pointer text-blue-500 mr-5' />
                <MdOutlineGifBox size={25} className='cursor-pointer text-blue-500 mr-4' />
                <BiPoll size={25} className='cursor-pointer text-blue-500 mr-4' />
                <BsEmojiSmile size={20} className='cursor-pointer text-blue-500 mr-4' />
                <IoLocationOutline size={25} className='cursor-pointer text-blue-500' />
               </div>
               <div>
                <button className='bg-blue-500 text-white rounded-2xl px-5 py-1 cursor-pointer'>Post</button>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TwitterPostBar;
