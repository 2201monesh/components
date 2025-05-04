import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

function WorkflowBar({ text, onDelete }) {
  return (
    <div className="w-[100%] border border-gray-300 rounded-lg p-2 mb-3 cursor-pointer flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">
          <RxDragHandleDots2 className="text-gray-700" size={18} />
        </span>
        <span className="text-sm">{text}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-1">
          <MdOutlineEdit className="text-gray-700" size={18} />
        </span>
        <span>
          <MdDeleteOutline
            className="text-gray-700"
            size={18}
            onClick={onDelete}
          />
        </span>
      </div>
    </div>
  );
}

export default WorkflowBar;
