import React from "react";
import Banner from "../assets/banner.png";
interface JumpBackInProps {
  title: string;
  level: string;
  pathName: string;
}

const JumpBackIn: React.FC<JumpBackInProps> = ({
  title = "Scientific Thinking",
  level = "Science · Level 1",
  pathName = "Continue path",
}) => {
  return (
    <div className="rounded-lg border-2 border-gray-300 border-t border-l border-r border-gray-300 border-b-4 border-b-gray-300 hover:border-gray-400">
      <img
        src={Banner}
        alt=""
        className=" w-full object-fill rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4 text-center rounded-bl-lg rounded-br-lg">
        <p className="mt-2 text-sm text-[#b78900] font-bold uppercase">
          {level}
        </p>
        <h3 className="text-2xl text-gray-800 font-bold">{title}</h3>
        <button className="w-full mt-4 mb-4 bg-black text-white px-4 py-2 rounded-full">
          {pathName}
        </button>
      </div>
    </div>
  );
};

export default JumpBackIn;
