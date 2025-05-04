import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";

function WorkflowBar({ text }) {
  return (
    <div className="w-[100%] border border-gray-300 rounded-lg px-2 py-1 mb-3 cursor-pointer flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">
          <RxDragHandleDots2 size={18} />
        </span>
        <span className="text-sm">{text}</span>
      </div>
      <div className="flex items-center">
        <span>
          <MdDeleteOutline size={18} />
        </span>
      </div>
    </div>
  );
}

export default WorkflowBar;
