import React from "react";
import Header from "./cardComponent/Header";
import Main from "./cardComponent/Main";

const Card = () => {
return <div className="box-border bg-white w-128 h-130 rounded-lg overflow-hidden  py-2 ">
    <Header />
    <Main />
    
  </div>;
};

export default Card;
