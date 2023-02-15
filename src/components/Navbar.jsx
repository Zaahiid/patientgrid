import React from "react";
import LogoImg from "../assets/Frame 298.png";
import { VscTriangleDown } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="bg-[#D9D9D9] h-fit lg:h-[89px] w-full top-0">
      <div className="flex flex-col md:flex-row justify-between items-center font-poppins ">
        <div className="mt-5 ml-1 mr-0 md:mr-3 lg:ml-[140px]">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div>
          <ul className="flex  mt-5 cursor-pointer">
            <li className="mr-[45px]">Products</li>
            <li className="mr-[45px]">Plans</li>
            <li>More</li>
            <VscTriangleDown className="mt-[6px] ml-2" />
          </ul>
        </div>
        <div className="flex gap-2 items-center mt-5 mb-1 lg:mr-[140px] cursor-pointer">
          <ul className=" ml-[20px] md:mr-[37px]">
            <li>Login</li>
          </ul>
          <button className="bg-[#2A0896] text-white px-4 py-1 md:px-7 md:py-3 rounded-full hover:animate-bounce">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
