import React from "react";
import { Filter } from "lucide-react";

function FileComponents() {
  return (
    <div className="w-[30%] h-[70%] border flex justify-center p-6">
      <div className="w-[70%] h-8 border rounded-md px-3 py-2 outline-none border-gray-400 flex items-center">
        <Filter className="text-gray-500 mr-2" size={18} />
        <input
          type="text"
          className=" border-amber-500 px-1 py-1 outline-none"
          placeholder="filter items..."
        />
      </div>
    </div>
  );
}

export default FileComponents;
