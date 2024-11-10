import React from "react";
import logo from "../assets/logo.svg";
import mobbin from "../assets/mobbin.png";

const HomeFooter: React.FC = () => {
  return (
    <header className=" bg-gray-800 flex justify-between items-center py-2 px-[20px]">
      <div className="flex items-center">
        <img src={logo} alt="logo" width="60" />
        <h1 className="text-2xl font-bold text-[#ffffff] CatamaranFont tracking-wide">
          Brilliant
        </h1>
      </div>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-[#ffffff] ">curated by </h1>
        <img src={mobbin} alt="logo" width="160" className="ml-4" />
      </div>
    </header>
  );
};

export default HomeFooter;
