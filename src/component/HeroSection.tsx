import React from "react";
import HeroImage from "../assets/heroImage.png";

const HeroSection: React.FC = () => {
  return (
    <main className="flex flex-col items-center text-center mt-10">
      <div className="flex justify-between items-center w-full px-[120px]">
        <div className="flex-1 text-center text-start">
          <h2 className="text-6xl font-bold gelasioFont">
            Learn by <span className="text-blue-500">doing</span>
          </h2>
          <p className="text-black-700 mt-8 max-w-md">
            Guided interactive problem solving that’s effective and fun. Master
            concepts in 15 minutes a day.
          </p>
          <button className="w-[260px] mt-10 px-6 py-2 bg-green-500 text-white font-semibold rounded-full border-b-4 border-b-green-600 hover:bg-green-400">
            Get started
          </button>
        </div>
        <div className="flex-1 rightAlign">
          <img src={HeroImage} width="80%" height="70%" alt="hero-image" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
