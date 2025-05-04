import React, { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit, MdDone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

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
          <RxDragHandleDots2 className="text-gray-700 cursor-grab" size={18} />
        </span>
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.input
              type="text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="outline-none p-1 text-sm"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          ) : (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="text-sm"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
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
            className="text-gray-700 hover:text-red-500"
            size={18}
            onClick={deleteWorkflow}
          />
        </span>
      </div>
    </div>
  );
}

export default WorkflowBar;
