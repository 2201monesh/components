import React from "react";

function WorkflowBar({ text }) {
  return (
    <div className="w-[100%] border border-gray-300 rounded-lg px-2 py-1 mb-3 cursor-pointer">
      {text}
    </div>
  );
}

export default WorkflowBar;
