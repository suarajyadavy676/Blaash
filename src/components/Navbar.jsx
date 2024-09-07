import React from "react";
import NavDrawer from "./NavDrawer";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="grid grid-cols-7 justify-between items-center bg-[#27272F] text-white py-4 my-2">
      <NavDrawer />
      <p className="text-2xl font-bold">Design Studio</p>
      <button className="flex items-center border-blue-800 border-2 rounded-md mx-auto px-2">
        <img src="contact_support.png" alt="contact_support" className="mr-1" />
        Support Request
      </button>
      <button className="flex items-center border-blue-800 border-2 rounded-md mx-auto px-2">
        <img src="product.png" alt="product" className="mr-1" />
        Product Tour
      </button>
      <div className="relative">
        <input type="text" placeholder="Search Project..." className=" rounded-md px-2 py-1 bg-slate-600 text-black" />
        <CiSearch className="text-xl absolute top-2 right-6" />
      </div>
      <IoIosNotifications className="text-xl" />
      <div className="flex text-blue-600  ">
        <FaRegUserCircle className=" text-2xl text-right mr-1" />
        <p>Sign in</p>
      </div>
    </div>
  );
}

export default Navbar;
