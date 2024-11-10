import math from "../assets/math.svg";
import DA from "../assets/DA.svg";
import CS from "../assets/CS.svg";
import PAI from "../assets/PAI.svg";
import SE from "../assets/SE.svg";

const Subject = () => {
  return (
    <div className="px-4 sm:px-8 md:px-[120px]">
      <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-12">
        <div className="text-center flex items-center w-1/2 sm:w-auto">
          <img src={math} alt="Google" className="w-6 h-6 " />
          <p className="text-black-500 font-semibold ml-2">Math</p>
        </div>
        <div className="text-center flex items-center w-1/2 sm:w-auto">
          <img src={DA} alt="Google" className="w-6 h-6 " />
          <p className="text-black-500 font-semibold ml-2">Data Analysis</p>
        </div>
        <div className="text-center flex items-center w-1/2 sm:w-auto">
          <img src={CS} alt="Google" className="w-6 h-6 " />
          <p className="text-black-500 font-semibold ml-2">Computer Science</p>
        </div>
        <div className="text-center flex items-center w-1/2 sm:w-auto">
          <img src={PAI} alt="Google" className="w-6 h-6 " />
          <p className="text-black-500 font-semibold ml-2">Programming & AI</p>
        </div>
        <div className="text-center flex items-center w-1/2 sm:w-auto">
          <img src={SE} alt="Google" className="w-6 h-6 " />
          <p className="text-black-500 font-semibold ml-2">
            Science & Engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subject;
