import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import WorkflowBar from "./WorkflowBar";
import { motion, AnimatePresence, Reorder } from "framer-motion";

function GeneralWorkflow() {
  const [numberOfWorkflow, setNumberOfWorkflow] = useState([
    { id: 1, text: "Workflow 1" },
  ]);

  const handleBtnClick = () => {
    setNumberOfWorkflow((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: `Workflow ${prev.length + 1}`,
      },
    ]);
  };

  const handleDelete = (idToDelete) => {
    setNumberOfWorkflow((prev) =>
      prev.filter((item) => item.id !== idToDelete)
    );
  };

  const handleUpdateText = (id, newText) => {
    setNumberOfWorkflow((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  return (
    <div className="w-[30%] h-[70%] bg-white rounded-lg flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <div className="flex flex-col">
          <p className="font-medium">General Workflow</p>
          <p className="text-sm text-gray-500">
            Overall task management and efficiency
          </p>
        </div>
        <button className="px-3 py-1 rounded-lg border-2 border-gray-300 cursor-pointer text-sm flex items-center justify-between">
          <span className="mr-2">Workflow 1</span>
          <IoIosArrowDown />
        </button>
      </div>
      <div className="p-4 max-h-[70%] overflow-y-scroll">
        <Reorder.Group
          axis="y"
          values={numberOfWorkflow}
          onReorder={setNumberOfWorkflow}
        >
          {numberOfWorkflow.map((item, index) => (
            <Reorder.Item
              key={item.id}
              value={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <WorkflowBar
                text={item.text}
                id={item.id}
                onDelete={() => handleDelete(item.id)}
                onUpdateText={handleUpdateText}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <div className="flex items-center w-[100%] justify-center mt-2">
        <button
          className="text-blue-500 cursor-pointer"
          onClick={handleBtnClick}
        >
          Add new workflow
        </button>
      </div>
    </div>
  );
}

export default GeneralWorkflow;
