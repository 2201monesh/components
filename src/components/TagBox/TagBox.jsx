import React, { useEffect, useRef, useState } from "react";
import { BiBold } from "react-icons/bi";
import { FaItalic } from "react-icons/fa";
import { FaImage, FaLink, FaAt } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const users = ["Monesh", "Aditya", "Bhavesh", "Varun"];

function TagBox() {
  const [inputValue, setInputValue] = useState("");
  const [showUserList, setShowUserList] = useState(false);
  const [mentionQuery, setMentionQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef(null);

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(mentionQuery.toLowerCase())
  );

  useEffect(() => {
    if (!showUserList) setSelectedIndex(0);
  }, [showUserList]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const match = value.slice(0, e.target.selectionStart).match(/@(\w*)$/);
    if (match) {
      setShowUserList(true);
      setMentionQuery(match[1]);
    } else {
      setShowUserList(false);
      setMentionQuery("");
    }
  };

  const handleSelectUser = (username) => {
    const newValue = inputValue.replace(/@(\w*)$/, `@${username} `);
    setInputValue(newValue);
    setShowUserList(false);
    setMentionQuery("");
  };

  const handleKeyDown = (e) => {
    if (!showUserList) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredUsers.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filteredUsers.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSelectUser(filteredUsers[selectedIndex]);
    } else if (e.key === "Escape") {
      setShowUserList(false);
    }
  };

  return (
    <div className="w-[50%] h-[45%] border rounded-xl p-8 relative">
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

      <div className="w-full h-[70%] mt-4 rounded-xl border relative">
        <input
          ref={inputRef}
          className="outline-none w-full h-[50%] p-6 text-xl"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your comment... use @ to mention"
        />

        {/* User list dropdown */}
        {showUserList && filteredUsers.length > 0 && (
          <ul className="absolute z-10 bg-white border rounded shadow p-1 top-[70px] left-[120px] w-48">
            {filteredUsers.map((user, index) => (
              <li
                key={user}
                className={`flex items-center cursor-pointer px-2 py-1 rounded-lg ${
                  index === selectedIndex
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleSelectUser(user)}
              >
                <FaUserCircle className="mr-2" size={18} />
                <span>{user}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="w-full h-[50%] p-4 flex items-center justify-between">
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
