import React from "react";
import Img1 from "../assets/doctor-lady.png";
import Img2 from "../assets/upperCorner.png";
import Img3 from "../assets/lowerCorner.png";

const Trial = () => {
  return (
    <div className="flex flex-col md:flex-row absolute top-[2250px] md:top-[2730px] lg:top-[3000px] ml-2 lg:ml-[150px] w-[370px] md:w-[800px] lg:w-[1260px] h-[550px] md:h-[340px] lg:h-[378px] bg-[#D9DEEF] rounded-[30px] font-poppins">
      <div className="absolute">
        <img
          src={Img2}
          alt="corner"
          className="h-[120px] md:h-[150px] lg:h-[216px] w-[80px] md:w-[100px] lg:w-[140px] rounded-tl-[30px]"
        />
        <div className="absolute w-[200px] md:w-[295px] lg:w-[350px] ml-[75px] md:ml-[15px] lg:ml-[50px] top-[50px] md:top-[35px] lg:top-[18px]">
          <img src={Img1} alt="Doctor" />
        </div>
      </div>
      <div className="absolute justify-center mt-[260px] md:mt-[70px] lg:mt-[50px] ml-[35px] md:ml-[300px] lg:ml-[450px]">
        <p className="text-[20px] md:text-[30px] lg:text-[40px] font-medium">
          We work on a month-to-month
          <br /> basis, try for free with no
          <br /> commitments
        </p>
        <p className="text-[#000000B2] text-[10px] md:text-[15px] lg:text-[18px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-[#4482C2] text-white rounded-[30px] mt-3 md:mt-4 px-4 md:px-8 py-2 md:py-3">
          14 Free Trial
        </button>
        <div className="absolute w-[140px] top-[168px] md:top-[120px] lg:top-[110px] left-[253px] md:left-[400px] lg:left-[672px]">
          <img
            src={Img3}
            alt="corner"
            className="h-[120px] md:h-[150px] lg:h-[216px] w-[80px] md:w-[100px] lg:w-[140px] rounded-br-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Trial;
