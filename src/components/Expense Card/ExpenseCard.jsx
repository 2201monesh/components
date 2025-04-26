import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";

function ExpenseCard() {
  const [rawValue, setRawValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [amountType, setAmountType] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, "").replace(/₹/g, "").trim();
    if (/^\d{0,8}$/.test(value)) {
      setRawValue(value);
    }
  };

  const formatIndianNumber = (numStr) => {
    if (!numStr) return "";
    return `₹${Number(numStr).toLocaleString("en-IN")}`;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    console.log("Amount:", formatIndianNumber(rawValue));
    console.log("Date:", date?.toISOString().split("T")[0]);
  };

  const selectToday = () => {
    const today = new Date();
    handleDateSelect(today);
  };

  const handleTypeSelect = (type) => {
    setAmountType(type);
    console.log("Amount Type:", type);
  };

  return (
    <div className="w-96 bg-white rounded px-4 py-2">
      {/* Heading */}
      <div className="flex items-center">
        <p className="w-[95%] flex justify-center text-lg font-semibold">
          New Transaction
        </p>
        <p className="w-[5%] cursor-pointer">
          <MdClose size={20} />
        </p>
      </div>

      {/* Amount Input */}
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

      {/* Date Input */}
      <div className="mt-6 text-center relative">
        <div
          className="border rounded py-2 px-4 cursor-pointer text-gray-600 flex items-center justify-between"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <div className="flex flex-col items-start">
            <p className="text-xs">Date</p>
            <p>{selectedDate ? selectedDate.toDateString() : "Select Date"}</p>
          </div>
          <p>
            <CiCalendarDate size={20} />
          </p>
        </div>

        {showCalendar && (
          <div className="absolute top-full left-0 mt-1 bg-white shadow-lg z-10 p-2">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              inline
            />
            <div className="text-center mt-2">
              <button
                className="border border-gray-400 text-gray-500 px-3 py-1 rounded cursor-pointer w-[100%]"
                onClick={selectToday}
              >
                Select Today
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Amount Type Toggle */}
      <div className="mt-6 flex justify-between bg-gray-100 rounded-lg p-1">
        <div
          className={`w-1/2 text-center py-2 cursor-pointer font-medium transition-all ${
            amountType === "Income"
              ? "bg-white text-black rounded-lg shadow-sm mx-1"
              : "text-gray-500"
          }`}
          onClick={() => handleTypeSelect("Income")}
        >
          Income
        </div>
        <div
          className={`w-1/2 text-center py-2 cursor-pointer font-medium transition-all ${
            amountType === "Expense"
              ? "bg-white text-black rounded-lg shadow-sm mx-1"
              : "text-gray-500"
          }`}
          onClick={() => handleTypeSelect("Expense")}
        >
          Expense
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;
