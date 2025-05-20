import React from "react";
import { Filter } from "lucide-react";
import TreeNode from "./TreeNode";

function FileComponents() {
  const fileStructure = [
    {
      type: "folder",
      name: "src",
      children: [
        {
          type: "file",
          name: "App.jsx",
        },
        {
          type: "folder",
          name: "components",
          children: [
            { type: "file", name: "Header.jsx" },
            { type: "file", name: "Sidebar.jsx" },
          ],
        },
      ],
    },
    {
      type: "file",
      name: "package.json",
    },
  ];

  return (
    <div className="w-[30%] h-[70%] border flex items-center flex-col p-6">
      <div className="w-[70%] flex flex-col h-[100%]">
        <div className="w-[100%] h-8 border rounded-md px-3 py-2 outline-none border-gray-400 flex items-center mb-4">
          <Filter className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            className=" border-amber-500 px-1 py-1 outline-none"
            placeholder="filter items..."
          />
        </div>
        <div className="cursor-pointer">
          {fileStructure.map((item, index) => (
            <TreeNode key={index} node={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FileComponents;
