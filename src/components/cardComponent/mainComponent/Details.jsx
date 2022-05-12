import React, { useState } from "react";
import show from "../../images/show.svg";
import hide from "../../images/hide.svg";

const Details = () => {
  const [check, setCheck] = useState(false);

  return (
    <div className="w-full h-max ">
      <div className="w-full h-8 flex items-center justify-center">
        <span
          onClick={() => setCheck(!check)}
          className="h-full w-max flex items-center cursor-pointer"
        >
          <h3 className=" font-bold text-[11px]">
            {check ? "Hide Details" : "Show Details"}{" "}
          </h3>

          {check ? (
            <img src={show} className="w-3 ml-1" />
          ) : (
            <img src={hide} className="w-3 ml-1" />
          )}
        </span>
      </div>
      {check ?
      <div className="w-full h-max">
        <div className="w-full flex items-center justify-between font-semibold text-sm px-1">
          <span>APY</span>
          <span className="text-yellow-300">9.0 %</span>
        </div>
        <div className="w-full h-max" >
          <ul className="list-disc list-inside w-full text-gray-400 font-semibold text-xs p-3 mt-1">
            <li > Calculated based on current rates</li>
            <li>All figures are estimtes provided for your convenience only, and by no means represent guaranteed returns.</li>
          </ul>
        </div>
      </div>
 : null}
    </div>
  );
};

export default Details;
