"use client";
import React, { useState } from "react";
const SearchBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"rent" | "buy">("buy");
  return (
    <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
      {" "}
      <div className="flex">
        {" "}
        <button
          onClick={() => setActiveTab("rent")}
          className={`px-8 py-3 rounded-t-xl text-sm font-bold transition ${activeTab === "rent" ? "bg-white text-black" : "bg-gray-300 text-black"}`}
        >
          {" "}
          Rent car{" "}
        </button>{" "}
        <button
          onClick={() => setActiveTab("buy")}
          className={`px-8 py-3 rounded-t-xl text-sm font-bold transition ${activeTab === "buy" ? "bg-white text-black" : "bg-gray-300 text-black"}`}
        >
          {" "}
          Buy car{" "}
        </button>{" "}
      </div>{" "}
      <div className="bg-white p-5 rounded-b-2xl rounded-tr-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
        {" "}
        <input
          type="text"
          placeholder="👤 Number of seat"
          className="flex-1 w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-black text-sm outline-none"
        />{" "}
        <input
          type="text"
          placeholder="💰 Price"
          className="flex-1 w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-black text-sm outline-none"
        />{" "}
        <input
          type="text"
          placeholder="📍 Location"
          className="flex-1 w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-black text-sm outline-none"
        />{" "}
        <button className="bg-[#2d2d2d] hover:bg-black text-white w-full md:w-auto px-10 py-4 rounded-xl font-bold transition">
          {" "}
          Search{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default SearchBar;




