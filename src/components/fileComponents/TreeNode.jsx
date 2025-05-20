import React, { useState } from "react";
import { Folder, FolderOpen, FileText } from "lucide-react";
import { LuFolderOpen } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function TreeNode({ node, level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const paddingLeft = `${level * 16}px`;

  if (node.type == "file") {
    return (
      <div
        className="flex items-center gap-2 mb-1 text-gray-800 hover:bg-gray-100 rounded-md py-1 px-2"
        style={{ paddingLeft }}
      >
        <p className="text-md">{node.name}</p>
      </div>
    );
  }

  return (
    <div className="mb-1">
      <div
        className="flex items-center hover:bg-gray-100 rounded-md py-1 px-2"
        style={{ paddingLeft }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="mr-1">
          {isOpen ? (
            <IoIosArrowDown className="text-gray-600" size={20} />
          ) : (
            <IoIosArrowForward className="text-gray-600" size={20} />
          )}
        </span>
        <span className="mr-2">
          {isOpen ? (
            <LuFolderOpen className="text-gray-600" size={20} />
          ) : (
            <CiFolderOn className="text-gray-600" size={20} />
          )}
        </span>
        <p>{node.name}</p>
      </div>
      {isOpen && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;
