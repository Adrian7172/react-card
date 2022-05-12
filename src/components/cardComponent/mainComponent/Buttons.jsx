import React from "react";

const Buttons = ({one, two, three, four, five}) => {
  return <div >
        <button
          className="w-[75px] h-[33px] ml-2 rounded-full
        border-2
        border-yellow-300
      bg-yellow-100 cursor-pointer
      "
        >
          <h3 className="font-semibold text-[11px] ">{one}</h3>
        </button>
        <button
          className="w-[75px] h-[33px] ml-1.5 rounded-full bg-gray-100
         hover:border-2
         hover:border-yellow-300
       hover:bg-yellow-100 cursor-pointer"
        >
          <h3 className="font-semibold text-gray-400 text-[11px] ">{two}</h3>
        </button>
        <button
          className="w-[75px] h-[32px] ml-1.5 rounded-full bg-gray-100
         hover:border-2
         hover:border-yellow-300
       hover:bg-yellow-100 cursor-pointer"
        >
          <h3 className="font-semibold text-gray-400 text-[11px]">{three}</h3>
        </button>
        <button
          className="w-[75px] h-[32px] ml-1.5 rounded-full bg-gray-100
         hover:border-2
         hover:border-yellow-300
       hover:bg-yellow-100 cursor-pointer"
        >
          <h3 className="font-semibold text-gray-400 text-[11px]">{four}</h3>
        </button>
        <button
          className="w-[75px] h-[32px] ml-1.5 rounded-full bg-gray-100
         hover:border-2
         hover:border-yellow-300
       hover:bg-yellow-100 cursor-pointer"
        >
          <h3 className="font-semibold text-gray-400 text-[11px]">{five}</h3>
        </button>
  </div>;
};

export default Buttons;
