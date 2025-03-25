import React, { useState, useEffect, useRef } from 'react'
import FilterDropdown from './FilterDropdown';

function ComboBox() {

    const [showFilter, setShowFilter] = useState(false);
      const dropdownRef = useRef(null);


    const toggleShowFilter = () => {
        setShowFilter((prev) => !prev)
    }

    useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    }

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#09090B] text-[#E4E4E4]'>
      <div className='w-[40%] h-[60%] border border-[#27272A] rounded-[6px] flex items-center justify-center flex-col relative'>
        <div className="relative" ref={dropdownRef}>
            <button className='btn position-sticky w-[150px] h-[40px] border border-[#27272A] rounded-[6px] cursor-pointer hover:bg-[#27272A]' onClick={toggleShowFilter}>Set Status</button>
            {showFilter && (
            <div className="absolute top-full left-0 mt-1">
              <FilterDropdown />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ComboBox;
