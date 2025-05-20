import React from "react";
import { Filter } from "lucide-react";
import TreeNode from "./TreeNode";

function FileComponents() {
  //   const fileStructure = [
  //     {
  //       type: "folder",
  //       name: "src",
  //       children: [
  //         {
  //           type: "file",
  //           name: "App.jsx",
  //         },
  //         {
  //           type: "folder",
  //           name: "components",
  //           children: [
  //             { type: "file", name: "Header.jsx" },
  //             { type: "file", name: "Sidebar.jsx" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       type: "file",
  //       name: "package.json",
  //     },
  //   ];

  const fileStructure = [
    {
      type: "folder",
      name: "src",
      children: [
        {
          type: "file",
          name: "main.jsx",
        },
        {
          type: "file",
          name: "App.jsx",
        },
        {
          type: "folder",
          name: "assets",
          children: [
            {
              type: "file",
              name: "logo.png",
            },
            {
              type: "file",
              name: "styles.css",
            },
          ],
        },
        {
          type: "folder",
          name: "components",
          children: [
            { type: "file", name: "Header.jsx" },
            { type: "file", name: "Sidebar.jsx" },
            {
              type: "folder",
              name: "common",
              children: [
                { type: "file", name: "Button.jsx" },
                { type: "file", name: "Card.jsx" },
              ],
            },
          ],
        },
        {
          type: "folder",
          name: "pages",
          children: [
            { type: "file", name: "Home.jsx" },
            { type: "file", name: "About.jsx" },
          ],
        },
      ],
    },
    {
      type: "folder",
      name: "public",
      children: [
        {
          type: "file",
          name: "index.html",
        },
        {
          type: "file",
          name: "favicon.ico",
        },
      ],
    },
    {
      type: "file",
      name: "package.json",
    },
    {
      type: "file",
      name: "README.md",
    },
  ];

  return (
    <div className="w-[30%] h-[70%] border flex items-center flex-col p-6">
      <div className="w-[70%] flex flex-col h-[100%] overflow-y-scroll">
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
