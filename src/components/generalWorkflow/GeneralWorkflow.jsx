import React from "react";

function GeneralWorkflow() {
  return (
    <div className="w-[30%] h-[70%] bg-white rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-medium">General Workflow</p>
          <p className="text-sm text-gray-500">
            Overall task management and efficiency
          </p>
        </div>
        <button className="px-3 py-1 rounded-lg border-2 border-gray-300 cursor-pointer text-sm">
          Workflow 1
        </button>
      </div>
    </div>
  );
}

export default GeneralWorkflow;
