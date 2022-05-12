import React from "react";

const Toggle = () => {
  return <div  className="w-full h-full">
      <label htmlFor="toggle-switch" className={`flex items-center justify-center h-full w-full `}>
          <input type="checkbox" id="toggle-switch"  className="cursor-pointer h-full w-full rounded-full appearance-none bg-gray-300 checked:bg-yellow-400 transition duration-200 relative"/>
      </label>
  </div>;
};

export default Toggle;
