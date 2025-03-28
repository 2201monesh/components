import React, { useState, useEffect } from 'react'

function TwitterPostBar() {

  const [text, setText] = useState('')

  return (
    <div className='main-container w-screen h-screen flex items-center justify-center'>
      <div className='w-[30%] bg-white rounded p-6 flex'>
        <div className='w-[8%]'>
            <img src="https://avatars.githubusercontent.com/u/75907582?v=4" alt="user-image" width={40} className='rounded-full' />
        </div>
        <div className='w-[92%] pl-4'>
            <textarea className='w-full resize-none overflow-scroll outline-none text-base' placeholder="What's happening?" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
      </div>
    </div>
  )
}

export default TwitterPostBar;
