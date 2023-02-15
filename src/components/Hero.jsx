import React from "react";
import Img1 from "../assets/Group 73.png";
import Home from "../assets/Home.png";

const Hero = () => {
  return (
    <div className="font-poppins">
      <div className="mt-3 md:mt-[85px]">
        <p className="capitalize text-[30px] md:text-[45px] lg:text-[70px] text-[#282828] font-medium">
          medical software to attract
          <br />
          and<span className="font-extrabold"> retain patients</span>
        </p>
      </div>
      <div className="mt-4 md:mt-[27px]">
        <p className="text-[#282828B2] text-[12px] md:text-[16px] lg:text-[22px] font-medium">
          Patientgrid’s communication platform helps improve <br />
          patient experience while staff hours.
        </p>
      </div>
      <div className="flex justify-center mt-4 md:mt-[40px]">
        <p className="font-medium text-[11px] md:text-[16px] lg:text-[22px] cursor-pointer">
          Start For Free
        </p>
        <img
          className="animate-bounce hover:animate-none cursor-pointer w-3 md:w-4 lg:w-6 mt-1 ml-1"
          src={Img1}
          alt="logo"
        />
      </div>
      <div className="mt-7 md:mt-[89px] relative">
        <div className="w-[100vw] h-[200px] md:h-[350px] lg:h-[538px] m-0 bg-gradient-to-r from-[#87CEFA] to-[#2A0896] rounded-[30px] rotate-[7.43deg] absolute z-0"></div>
        <img
          src={Home}
          alt="Home"
          className="absolute z-10 lg:ml-[220px] mt-0 md:mt-[-20px]"
        />
      </div>
    </div>
  );
};

export default Hero;
