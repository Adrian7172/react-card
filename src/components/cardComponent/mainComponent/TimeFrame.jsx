import React from "react";
import Buttons from "./Buttons";

const TimeFrame = () => {
  return (
    <div className="w-full h-20 ">
      <div className=" w-full h-7 flex items-center pl-2 font-bold text-[13px]">
        Timeframe
      </div>
      <div className="w-full h-14 flex items-center  ">
      <Buttons one={"1 Day"} two={"7 Days"} three={"30 Days"} four={"1 Year"} five={"5 Year"} />
      </div>
    </div>
  );
};

export default TimeFrame;
