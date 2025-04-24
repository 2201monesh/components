import React from "react";
import "./MeetingCards.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

function MeetingCards() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[20%] h-[70%] bg-white rounded-sm p-4">
        <p className="mb-2">30 minute call with David</p>
        <p className="text-xs text-gray-700 border-b pb-4">
          Let's schedule a quick call and jamp on the potential between Lantern
          and your company. I will show you how we can accelerate your sales
          growth!
        </p>
        <div className="mt-2 flex justify-between">
          <button className="border border-gray-400 px-4 py-1 rounded cursor-pointer">
            <p className="text-sm text-gray-700">April 2025</p>
          </button>
          <div className="flex">
            <button className="border border-gray-400 p-[5px] rounded flex justify-center items-center mr-2 cursor-pointer">
              <GrFormPrevious className="text-gray-700" size={18} />
            </button>
            <button className="border border-gray-400 p-[3px] rounded flex justify-center items-center cursor-pointer">
              <MdNavigateNext className="text-gray-700" size={20} />
            </button>
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
}

export default MeetingCards;
