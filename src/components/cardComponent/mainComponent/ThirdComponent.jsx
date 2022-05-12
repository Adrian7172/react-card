import React from "react";

const ThirdComponent = () => {
  return <div className="w-full h-28 relative px-1 ">
      <span className="float-right font-semibold text-gray-400 text-[13px] mb-1  ">ROI at Current Rates</span>
      <input
          type="text"
          className="w-full h-14  rounded-lg border-2 text-right pr-[70px] text-2xl font-bold 
          focus:bg-gray-100
          hover:border-gray-300 hover:bg-gray-100 
          placeholder:text-inherit "
          placeholder="0.00"
        />
        <label className="absolute right-4 top-[35px] text-2xl font-bold">
          USD
        </label>
        <span className="float-right font-semibold text-gray-400 text-[11px] mt-1.5 ">~ 0.000 CAKE + 0.000000 DON</span>
  </div>;
};

export default ThirdComponent;
