import React from "react";
import Image from "next/image";
import pinterest from "../assets/pinterest.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch, FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import haaland from "../assets/haaland.jpg";

const Navbar = () => {
  return (
    <div className=" ">
      <div className="flex items-center justify-between p-3 pt-4">
        {/* Left Side */}

        <div className="flex items-center ">
          <div className="w-12 h-12">
            <Image src={pinterest} />
          </div>
          <div className="flex   hover:bg-neutral-200 items-center ml-4 py-3 md:py-2.5 px-4 rounded-full md:bg-black md:text-white sm:hover:bg-black">
            <button className="font-semibold text-[18px] ">Home</button>

            <MdKeyboardArrowDown className="h-full  text-[22px] md:hidden " />
          </div>
          <div className="hidden md:flex     items-center ml-2 py-3 px-3 rounded-full">
            <button className="font-semibold text-[18px]">Create</button>

            <MdKeyboardArrowDown className="h-full  text-[22px] " />
          </div>
        </div>

        {/* Middle Side */}
        <div className="relative  hidden sm:inline-flex items-center w-full ml-4 ">
          <input
            type="search"
            placeholder="Search"
            className="bg-neutral-200 p-2.5 rounded-full pl-10 w-full md:py-3 outline-[20px] focus:outline-0 focus:ring-4"
          />
          <FaSearch className="absolute left-3 text-gray-500" />
        </div>
        {/* Right Side */}
        <div className="flex items-center text-[44px] text-gray-500 shrink-0  ">
          <div className="flex items-center space-x-4  ">
            <FaSearch className="hidden xs:inline-flex  sm:hidden  hover:bg-neutral-200  rounded-full  p-2" />

            <FaBell className="hover:bg-neutral-200 p-2  rounded-full hidden xs:inline-flex" />
            <AiFillMessage className="hover:bg-neutral-200 p-2 rounded-full hidden xs:inline-flex" />

            <div className="flex  ">
              <Image
                src={haaland}
                className="w-[3.1rem] h-[3.1rem] object-cover  rounded-full "
              />
            </div>
          </div>

          <MdKeyboardArrowDown className="ml-1.5 hover:bg-neutral-200 p-2 rounded-full hidden xs:inline-flex" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
