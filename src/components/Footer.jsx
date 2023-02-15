import React from "react";
import Logo from "../assets/footerLogo.png";
import { RiFacebookCircleFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { TfiAngleRight } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="absolute top-[2850px] md:top-[3130px] lg:top-[3450px] h-fit w-full bg-[#2A0896] font-poppins text-white">
      <div className="flex flex-col md:flex-row justify-between mt-[80px] lg:mb-5">
        {/* 1 */}
        <div className="ml-[55px] md:ml-[30px] lg:ml-[155px]">
          <img src={Logo} alt="Logo" />
          <div className="w-[287px] text-left mt-[30px]">
            <p className="text-[16px] md:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="flex gap-4 mt-[15px] md:mt-[20px]">
            <RiFacebookCircleFill size={25} />
            <AiFillTwitterCircle size={25} />
            <AiFillInstagram size={25} />
          </div>
        </div>
        {/* 2 */}
        <div className="mt-[25px] md:mt-[20px] ml-[55px] md:ml-[30px] lg:ml-0">
          <div className="flex gap-3 mb-7">
            <div>
              <BsTelephoneFill size={20} />
            </div>
            <div>
              <h4> +91-8853923455</h4>
            </div>
          </div>
          <div className="flex gap-3 mb-7">
            <div>
              <RiWhatsappFill size={20} />
            </div>
            <div>
              <h4>+91-4567895478</h4>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4>patientgrid@gmail.com</h4>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <p className=" text-[18px] md:text-[20px] font-medium mr-[90px] md:mr-[25px] lg:mr-[239px] mb-4 mt-[20px] md:mt-[15px] lg:mt-0">
            Subscribe Newsletter
          </p>
          <input
            placeholder="Email"
            className="rounded-[30px] px-2 md:px-3 py-1 md:py-2 mt-[5px] md:mt-[1px] lg:mt-0  right-[115px] md:right-[20px] lg:right-[230px] absolute"
          />
          <button className="bg-[#2A52BE] w-[40px] h-[40px] pl-2 md:p-3 right-[113px] md:right-[15px] lg:right-[220px] rounded-full absolute z-30 items-center justify-center">
            <TfiAngleRight size={20} />
          </button>
        </div>
      </div>
      <div className="mt-14 lg:mt-0">
        <hr />
        <ul className="flex justify-center gap-12 my-3">
          <li className="cursor-pointer hover:underline">Products</li>
          <li className="cursor-pointer hover:underline">Plans</li>
          <li className="cursor-pointer hover:underline">More</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className="text-[12px] md:text-[16px] my-3 leading-[25px]">
          ©Copyright 2023.All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
