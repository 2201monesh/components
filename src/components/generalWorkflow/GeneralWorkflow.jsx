import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import WorkflowBar from "./WorkflowBar";

function GeneralWorkflow() {
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
      <div className="p-4">
        <WorkflowBar />
        <WorkflowBar />
        <WorkflowBar />
        <WorkflowBar />
      </div>
    </div>
  );
}

export default GeneralWorkflow;
