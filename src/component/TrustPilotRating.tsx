import React from "react";
import Start from "../assets/start.svg";
interface StarRatingProps {
  rating?: number;
  containerStyles?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  containerStyles = "",
}) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(Math.min(Math.max(rating, 0), 5));
  let partiallyFilledStar = rating - Math.floor(rating);

  const getStar = (offset: number, index: number) => {
    return (
      <div
        key={`${rating}-star-${index}`}
        className={`w-6 h-6 rounded-sm flex items-center justify-center overflow-hidden ${
          index < filledStars || (index === filledStars && partiallyFilledStar)
            ? "bg-[#00b67a]"
            : "bg-[#c1c1c1]"
        }`}
        style={{
          clipPath:
            partiallyFilledStar && index === filledStars
              ? `inset(0 ${100 - offset * 100}% 0 0)`
              : "unset",
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29013 0L11.8895 5.26604L17.7023 6.11567L13.4962 10.2124L14.4889 16L9.29013 13.266L4.09139 16L5.08403 10.2124L0.87793 6.11567L6.69076 5.26604L9.29013 0Z"
            fill={
              index < filledStars ||
              (index === filledStars && partiallyFilledStar)
                ? "#ffffff"
                : "#ffffff"
            }
          />
        </svg>
      </div>
    );
  };

  const starsArray = Array.from({ length: MAX_STARS }, (_, index) => {
    if (index < filledStars) {
      return getStar(1, index);
    }
    if (index === filledStars && partiallyFilledStar) {
      const offsetValue = partiallyFilledStar;
      partiallyFilledStar = 0;
      return getStar(offsetValue, index);
    }
    return getStar(0, index);
  });

  return (
    <div className={`items-center  ${containerStyles}`}>
      <div className="flex items-center">
        <img src={Start} alt="Start" width="30" />
        <span className="text-sm">Trustpilot</span>
      </div>
      <div className="flex space-x-1">{starsArray}</div>
    </div>
  );
};

export default StarRating;
