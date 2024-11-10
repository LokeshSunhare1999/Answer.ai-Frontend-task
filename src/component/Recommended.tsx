import React from "react";

interface Recommendation {
  title: string;
  subtitle: string;
  url: string;
}

interface RecommendedProps {
  recommendations: Recommendation[];
}

const Recommended: React.FC<RecommendedProps> = ({ recommendations }) => {
  return (
    <div className="">
      <div className="mt-4 flex space-x-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex flex-col items-center text-center border-2 border-gray-300 border-b-4 border-b-gray-300 hover:border-gray-400 w-[190px]"
          >
            <div className="w-20 h-14 rounded-full mb-4">
              <img src={rec.url} alt="" />
            </div>
            {rec.subtitle && (
              <p className="text-sm mt-4 font-semibold text-gray-500 uppercase">
                {rec.subtitle}
              </p>
            )}
            <h3 className="font-bold mt-4 text-lg text-gray-800">
              {rec.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
