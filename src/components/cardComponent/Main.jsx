import React from "react";
import FirstComponent from "./mainComponent/FirstComponent";
import TimeFrame from "./mainComponent/TimeFrame";
import ApyComponent from "./mainComponent/ApyComponent";
import ThirdComponent from "./mainComponent/ThirdComponent";
import Details from "./mainComponent/Details";
import Scroll from "./Scrollbar";


const Main = () => {
  return (
    <div id="main-component" className=" w-full h-[536px] overflow-y-scroll px-4">
      <Scroll />
      <FirstComponent />
      <TimeFrame />
      <ApyComponent />
      <ThirdComponent />
      <Details />
    </div>
  );
};

export default Main;
