import React from "react";
import Cross from "../images/cross.svg";
const Header = () => {
  return (
    <div className="flex items-center justify-between h-10 w-full px-4">
      <h4 className="font-semibold text-xl">ROI Calculator</h4>
      <img src={Cross} className="w-6 cursor-pointer" />
    </div>
  );
};

export default Header;
