import React from "react";
import Img1 from "../assets/inbox.png";

const Collaboration = () => {
  return (
    <div className="flex flex-col lg:flex-row absolute top-[1430px] md:top-[1550px] lg:top-[2000px] w-fit h-fit items-center mt-[400px] mx-4 lg:ml-[150px] bg-[#DDE9FF] rounded-[30px] font-poppins">
      <div className="text-justify md:ml-[34px]">
        <p className="text-[20px] md:text-[30px] lg:text-[40px] font-medium">
          Seamless collaboration
          <br /> for healthcare teams
        </p>
        <p className="text-[#000000B2] text-[10px] md:text-[15px] lg:text-[18px] mt-[20px]">
          With shared inboxes, any team member
          <br /> can resolve the team’s pending tasks.
          <br /> Individual staff member don’t get
          <br /> overwhelmed and patients are always take
          <br /> care of.
        </p>
      </div>
      <div>
        <img src={Img1} alt="inbox" className=" lg:m-4" />
      </div>
    </div>
  );
};

export default Collaboration;
