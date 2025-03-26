import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

function FilterDropdown({handleButtonText}) {

    const statuses = ["Backlog", "Todo", "In Progress", "Done", "Canceled"];
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStatuses = statuses.filter(status =>
      status.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='w-[180px] max-h-[200px] overflow-y-auto border mt-1 rounded-[6px] border border-[#27272A] bg-[#09090B] flex flex-col hide-scrollbar'>
      <div className='w-[100%] h-[40px] border border-[#27272A] rounded-t-[6px] flex items-center px-3'>
        <IoIosSearch className='mr-2' size={20}/>
        <input className='w-[80%] outline-none' placeholder='Filter status...' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
      </div>  

      {filteredStatuses.length > 0 ? (
        filteredStatuses.map((status, index) => (
          <p 
            key={status} 
            onClick={() => handleButtonText(status)}
            className={`w-[100%] h-[40px] flex items-center px-3 hover:bg-[#27272A] 
              ${index === filteredStatuses.length - 1 ? 'rounded-b-[6px]' : ''}`} 
          >
            {status}
          </p>
        ))
      ) : (
        <p className="w-[100%] h-[40px] flex items-center px-3 text-gray-500">
          No results found
        </p>
      )}
    </div>
  )
}

export default FilterDropdown
