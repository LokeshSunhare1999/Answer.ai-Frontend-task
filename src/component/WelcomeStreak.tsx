import React from "react";
import leagues from "../assets/leagues-locked.svg";
import power from "../assets/power.svg";
const days = ["T", "W", "Th", "F", "S"];

const WelcomeStreak: React.FC = () => {
  return (
    <div>
      <div className="p-5 rounded-xl border-2 border-gray-300">
        <div className="mt-4">
          <div className="text-4xl font-bold mb-4 flex items-center">
            <span>1</span>
            <img src={power} alt="leagues" className="w-8 h-7" />
          </div>
          <div>
            <p className="text-gray-800 mb-4">
              Solve <span className="font-bold">3 problems</span> to continue
              your streak
            </p>
            <div className="flex space-x-5 mt-2">
              {days.map((day, index) => (
                <div className="text-center ">
                  <div
                    key={index}
                    className={`px-3 py-3 rounded-full ${
                      day === "T"
                        ? "bg-[#d2e228] text-black border-2 border-[#d2e228]"
                        : "border-2 border-gray-400"
                    }`}
                  >
                    <img src={power} alt="leagues" className="w-8 h-7" />
                  </div>
                  <h2 className="text-lg font-semibold">{day}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 gap-4 flex items-center justify-start rounded-xl border-2 border-gray-300">
        <img src={leagues} alt="leagues" />
        <div>
          <div className="text-gray-700 uppercase font-bold">
            Unlock Leagues
          </div>
          <div className="text-gray-400">70 of 175 XP</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStreak;
