import React, { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit, MdDone } from "react-icons/md";

function WorkflowBar({ text, id, onDelete, onUpdateText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(text);

  const handleSave = () => {
    onUpdateText(id, inputText);
    setIsEditing(false);
  };

  const deleteWorkflow = () => {
    onDelete(id);
  };

  return (
    <div className="w-[100%] border border-gray-300 rounded-lg p-2 mb-3 cursor-pointer flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">
          <RxDragHandleDots2 className="text-gray-700" size={18} />
        </span>
        {isEditing ? (
          <input
            type="text"
            className="outline-none p-1 text-sm border-b border-gray-300"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        ) : (
          <span className="text-sm">{text}</span>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <span
            className="mr-1 text-green-600 hover:text-green-800"
            onClick={handleSave}
          >
            <MdDone size={18} />
          </span>
        ) : (
          <span
            className="mr-1 text-gray-700 hover:text-blue-600"
            onClick={() => setIsEditing(true)}
          >
            <MdOutlineEdit size={18} />
          </span>
        )}
        <span>
          <MdDeleteOutline
            className="text-gray-700"
            size={18}
            onClick={deleteWorkflow}
          />
        </span>
      </div>
    </div>
  );
}

export default WorkflowBar;
