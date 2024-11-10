import React from "react";
import NewYork from "../assets/newYork.svg";
import Atlantic from "../assets/atlantic.svg";
import AppleIcon from "../assets/AppleIcon.png";
import StarRating from "./StarRating";
import TrustPilotRating from "./TrustPilotRating";

const SocialSection: React.FC = () => {
  return (
    <section className="bg-[#e5e5e5] text-black mt-12 pb-2 pt-14 px-4 md:px-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join over 10 million learners worldwide
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <img src={NewYork} alt="The New York Times" width="150" />
          <img src={Atlantic} alt="The Atlantic" className="h-8 md:h-10 mb-1" />

          <div className="border-b-2 md:border-l-2 md:border-b-0 border-gray-400 mx-4 md:mx-0 md:h-12 w-full md:w-auto mt-4 md:mt-0"></div>

          <div className="text-left mb-4">
            <StarRating rating={5} />
            <p className="text-sm">Over 50,000 5-star app reviews</p>
          </div>

          <div className="border-b-2 md:border-l-2 md:border-b-0 border-gray-400 mx-4 md:mx-0 md:h-12 w-full md:w-auto mt-4 md:mt-0"></div>

          <div className="text-left mb-4">
            <TrustPilotRating rating={4} />
          </div>

          <div className="border-b-2 md:border-l-2 md:border-b-0 border-gray-400 mx-4 md:mx-0 md:h-12 w-full md:w-auto mt-4 md:mt-0"></div>

          <div className="flex items-center space-x-4">
            <div>
              <img src={AppleIcon} alt="Apple App Store" width="110" />
            </div>
            <div>
              <img src={AppleIcon} alt="Apple App Store" width="110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
