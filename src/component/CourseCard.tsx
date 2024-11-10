import React from "react";

interface cousreEnum {
  title: string;
  url: string;
}

interface cousreProps {
  cousreList: cousreEnum[];
}

const CourseCard: React.FC<cousreProps> = ({ cousreList }) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cousreList.map((rec, index) => (
          <div>
            <div
              key={index}
              className="relative p-4 rounded-lg flex flex-col items-center text-center border-2 border-gray-300 border-b-4 border-b-gray-300 hover:border-gray-400"
            >
              <div className="absolute top-2 right-2">
                <button className="bg-green-600 text-white px-2 py-1 rounded-md text-xs uppercase">
                  New
                </button>
              </div>
              <div className="w-20 h-14 rounded-full mt-4 mb-12">
                <img src={rec.url} alt={rec.title} />
              </div>
            </div>

            {rec.title && (
              <p className="text-sm mt-4 font-semibold text-center text-gray-600">
                {rec.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
