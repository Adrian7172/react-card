import React from "react";
import Buttons from "./Buttons";
import Toggle from "./Toggle";

const ApyComponent = () => {
  return (
      <div className="w-full h-30 ">
          <div className="w-full h-7 flex items-center justify-between  mt-1.5">
        <h3 className="font-bold text-[14.5px] ml-2">Enable Acclerated APY</h3>
        <span className="w-[38px] h-[20px] mr-1 ">
            <Toggle />
        </span>
          </div>
          <div className=" w-full h-7 flex pt-3 pl-2  font-semibold text-[12.5px] text-gray-400">
        Select Tier
      </div>
      <div className="w-full h-14 flex items-center">
        <Buttons one={"Tier 1"} two={"Tier 2"} three={"Tier 3"} four={"Tier 4"} five={"Tier 5"}  />
      </div>
      </div>
  )
};

export default ApyComponent;
