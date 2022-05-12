import React from "react";
import Toggle from "./Toggle";
import Cake from "../../images/icons8-bbb.svg";

const FirstComponent = () => {
  const data = [1000, 100];

  return (
    <div className="w-full h-32  ">
      {/* cake & usd */}
      <span className="float-right flex items-center justify-between  w-16 px-0.5 ">
        <div className=" w-[25px] h-[15px] ">
          <Toggle />
        </div>
        <h3 className="font-medium text-sm text-gray-500">USD</h3>
      </span>
      <span className="float-right flex items-center justify-between  w-16 px-0.5 mr-1 ">
        <img src={Cake} className="h-3 ml-1" />
        <h3 className="font-medium text-sm text-gray-500">CAKE</h3>
      </span>

      {/* input section */}
      <div className="w-full h-max flex items-center justify-center px-1 ">
        <input
          type="text"
          className="w-full h-14 mt-1 rounded-lg border-2 text-right pr-14 text-lg font-semibold 
          focus:bg-gray-100
          hover:border-gray-300 hover:bg-gray-100 
          placeholder:text-inherit "
          placeholder="0.000"
        />
        <label className="absolute right-5 top-[38px] text-lg font-semibold">
          USD
        </label>
      </div>

      {/* $ section */}
      <div className="w-full h-10  p-1 flex items-center  ">
        {data
          ? data.map((ele) => {
              return (
                <button
                  className="mr-2 w-[82px] h-full rounded-lg flex items-center justify-center bg-gray-100 font-semibold text-[11.5px]  hover:border-2 hover:border-yellow-300
                hover:bg-yellow-100 cursor-pointer
                "
                >
                  ${ele}
                </button>
              );
            })
          : null}
        <span className="absolute right-[1px] top-[82px] font-semibold text-gray-400 text-[11px] bg-white">
          ~ CAKE 0.000
        </span>
      </div>
    </div>
  );
};

export default FirstComponent;
