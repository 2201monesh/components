import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function ExpenseCard() {
  const [rawValue, setRawValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, "").replace(/₹/g, "").trim();

    // Allow only digits and max length of 8
    if (/^\d{0,8}$/.test(value)) {
      setRawValue(value);
    }
  };

  const formatIndianNumber = (numStr) => {
    if (!numStr) return "";
    return `₹${Number(numStr).toLocaleString("en-IN")}`;
  };

  return (
    <div className="w-96 bg-white rounded px-4 py-2">
      <div className="flex items-center">
        <p className="w-[95%] flex justify-center text-lg font-semibold">
          New Transaction
        </p>
        <p className="w-[5%] cursor-pointer">
          <MdClose size={20} />
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <input
          type="text"
          inputMode="numeric"
          value={formatIndianNumber(rawValue)}
          onChange={handleChange}
          className="text-4xl text-center w-full bg-transparent focus:outline-none border-none"
          placeholder="₹0"
        />
      </div>
    </div>
  );
}

export default ExpenseCard;
