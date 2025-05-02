import React from "react";
import { BiBold } from "react-icons/bi";
import { FaItalic } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";

function TagBox() {
  return (
    <div className="w-[50%] h-[45%] border rounded-xl p-8">
      <div className="flex items-center justify-between">
        <p className="text-2xl">Comments</p>
        <div className="flex items-center">
          <p className="px-4 py-1 border border-gray-500 rounded-bl-xl rounded-tl-xl bg-[#F7F7F7] text-lg">
            Latest
          </p>
          <p className="px-4 py-1 border border-gray-500 rounded-br-xl rounded-tr-xl text-lg">
            Popular
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[70%] mt-4 rounded-xl border">
        <input className="outline-none w-[100%] h-[50%] p-6 text-xl text-gray-600"></input>
        <div className="w-[100%] h-[50%] p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-3">
              <BiBold size={25} className="cursor-pointer mt-0.5" />
            </span>
            <span className="mr-4">
              <FaItalic size={18} className="cursor-pointer" />
            </span>
            <span className="mr-4">
              <FaImage size={20} className="cursor-pointer mt-0.5" />
            </span>
            <span>
              <FaLink size={20} className="cursor-pointer mt-0.5" />
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <FaAt
                size={20}
                className="cursor-pointer mt-0.5 mr-4 text-gray-500"
              />
            </span>
            <button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagBox;
