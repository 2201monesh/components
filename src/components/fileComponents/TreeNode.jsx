import React, { useState } from "react";
import { Folder, FolderOpen, FileText } from "lucide-react";
import { LuFolderOpen } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

function TreeNode({ node, level = 0, onDragStart, onDrop }) {
  const [isOpen, setIsOpen] = useState(false);

  const paddingLeft = `${level * 16}px`;

  const handleDragStart = (e) => {
    e.stopPropagation();
    onDragStart?.();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDrop?.(node);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const commonProps = {
    draggable: true,
    onDragStart: handleDragStart,
    onDrop: handleDrop,
    onDragOver: handleDragOver,
  };

  if (node.type == "file") {
    return (
      <motion.div
        {...commonProps}
        className="flex items-center gap-2 mb-1 text-gray-800 hover:bg-gray-100 rounded-md py-1 px-2"
        style={{ paddingLeft }}
        // whileHover={{ scale: 1.01 }}
        // whileTap={{ scale: 0.98 }}
      >
        <p className="text-md">{node.name}</p>
      </motion.div>
    );
  }

  return (
    <div className="mb-1">
      <motion.div
        {...commonProps}
        className="flex items-center hover:bg-gray-100 rounded-md py-1 px-2"
        style={{ paddingLeft }}
        onClick={() => setIsOpen((prev) => !prev)}
        // whileHover={{ scale: 1.01 }}
        // whileTap={{ scale: 0.98 }}
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
      </motion.div>
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
