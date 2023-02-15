import React from "react";
import Img1 from "../assets/doctor.png";
import Img2 from "../assets/stats.png";
import Img3 from "../assets/reviews.png";

const Benefits = () => {
  return (
    <div className="absolute top-[670px] md:top-[1000px] lg:top-[1253px] font-poppins">
      {/* 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="ml-[50px] lg:ml-[280px]">
          <img
            src={Img1}
            alt="doctor"
            className="w-[250px] md:w-[320px] lg:w-[420px] rounded-[30px]"
          />
        </div>
        <div className="absolute left-[65px] md:left-[370px] lg:left-[750px] mt-[350px] md:mt-0 w-[330px] md:w-[400px]">
          <p className="text-[20px] md:text-[25px] lg:text-[32px] font-medium text-[#282828] text-left">
            Bring new business in by <br />
            getting more online
            <br /> reviews.
            <br />
            <span className="text-[#000000B2] text-[13px] md:text-[18px] lg:text-[22px]">
              94% Use review to choose new doctor.
            </span>
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="absolute left-[65px] md:left-[100px] lg:left-[300px] mt-[450px] md:mt-[350px] lg:mt-[350px] w-[330px] md:w-[400px]">
          <p className="text-[20px] md:text-[25px] lg:text-[32px] font-medium text-[#282828] text-left">
            Save time with
            <br /> collaborative tools and <br />
            automations.
            <br />
            <span className="text-[#000000B2] text-[13px] md:text-[18px] lg:text-[22px]">
              15+ Staff hours saved per
              <br /> week.
            </span>
          </p>
        </div>
        <div className="absolute mt-[820px] md:mt-[350px] ml-[50px] lg:ml-[300px]">
          <img
            src={Img2}
            alt="stats"
            className="w-[250px] md:w-[420px] rounded-[30px] md:ml-[320px] lg:ml-[510px]"
          />
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="absolute mt-[1300px] md:mt-[1000px] lg:mt-[1100px] ml-[65px] lg:ml-[300px]">
          <img
            src={Img3}
            alt="Reviews"
            className="w-[250px] md:w-[320px] lg:w-[420px] rounded-[30px]"
          />
        </div>
        <div className="absolute mt-[1650px] md:mt-[1000px] lg:mt-[1100px] left-[80px] md:left-[380px] lg:left-[750px]  w-[400px]">
          <p className="text-[20px] md:text-[25px] lg:text-[32px]  font-medium text-[#282828] text-left">
            Improve patient
            <br /> experience engaging the
            <br /> way they want.
            <br />
            <span className="text-[#000000B2] text-[13px] md:text-[18px] lg:text-[22px]">
              90% People prefer texts to
              <br /> phone calls.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
