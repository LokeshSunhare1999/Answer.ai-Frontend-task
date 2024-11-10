import React from 'react';

interface StarRatingProps {
  rating?: number;
  containerStyles?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 0, containerStyles = '' }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(Math.min(Math.max(rating, 0), 5));
  const remainingStars = MAX_STARS - filledStars;
  let partiallyFilledStar = rating - Math.floor(rating);

  const getStar = (offset: number, index: number) => {
    return (
      <svg
        key={`${rating}-star-${index}`}
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.29013 0L11.8895 5.26604L17.7023 6.11567L13.4962 10.2124L14.4889 16L9.29013 13.266L4.09139 16L5.08403 10.2124L0.87793 6.11567L6.69076 5.26604L9.29013 0Z"
          fill={`url(#paint${rating}-${index}_linear_0_152)`}
        />
        <defs>
          <linearGradient
            id={`paint${rating}-${index}_linear_0_152`}
            x1="0.87793"
            y1="0"
            x2="17.7902"
            y2="0.0933817"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFC107" />
            <stop offset={offset} stopColor="#FFC107" />
            <stop offset={offset} stopColor="#C1C1C1" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const starsArray = Array.from({ length: MAX_STARS }, (_, index) => {
    if (index + 1 <= filledStars) {
      return getStar(1, index);
    }
    if (partiallyFilledStar) {
      const offsetValue = partiallyFilledStar;
      partiallyFilledStar = 0;
      return getStar(offsetValue, index);
    }
    return getStar(0, index);
  });

  return <div className={`flex h-6 max-w-24 ${containerStyles}`}>{starsArray}</div>;
};

export default StarRating;
