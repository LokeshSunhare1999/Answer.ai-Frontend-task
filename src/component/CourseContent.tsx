import search from "../assets/search.svg";
import CourseCard from "./CourseCard";

const cousreList = [
  {
    title: "How LLMs Works",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/how-llms-work-z7ovbF.png?width=204",
  },
  {
    title: "Designing Programs",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Designing_Programs_Course_Card-Bkn4k5.png?width=204",
  },
  {
    title: "Introduction to Probability",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/probability-fundamentals-9v92rY.png?width=204",
  },
  {
    title: "Modelling with Multiple Variables",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/explaining-variation-LbNO6h.png?width=204",
  },
  {
    title: "Vectors",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/vectors-Grpuo7.png?width=204",
  },
  {
    title: "Applied Python",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Text_Analysis_in_Python-rcga5J.png",
  },
  {
    title: "Case Study: Unlocking Rental Value on Airbnb",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-making-money-witih-airbnb-NDlGk9.png?width=204",
  },
  {
    title: "Case Study: Going Viral on X",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-twitterx-viral-tracking-rt01GG.png",
  },
  {
    title: "Case Study: Topping the Charts with Spotify",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-spotify-L7f7vf.png",
  },
  {
    title: "Case Study: Maximizing Electric Car Value",
    url: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-pricing-electric-vehicles-5KzO8N.png",
  },
];

const CourseContent = () => {
  return (
    <div className="gap-6 w-full px-[120px] mt-5 mb-12 ">
      <h1 className="text-2xl py-6 font-bold">Browse all 70+ courses</h1>
      <div className="relative ">
        <input
          type="text"
          placeholder="Search"
          className="w-[100%] pl-14 pr-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <img
          src={search}
          alt="search"
          className="w-5 h-5 absolute transform -translate-y-1/2 left-4 top-1/2"
        />
      </div>
      <div className=" py-6 flex justify-start gap-4">
        <button className="py-1 px-4 rounded-full font-bold text-gray-600 border-2 border-gray-600 hover:border-gray-800 hover:text-gray-800 ">
          New Courses
        </button>
        <button className="py-1 px-4 rounded-full font-bold text-gray-400 border-2 border-gray-400 hover:border-gray-800 hover:text-gray-800 ">
          Math
        </button>
        <button className="py-1 px-4 rounded-full font-bold text-gray-400 border-2 border-gray-400 hover:border-gray-800 hover:text-gray-800 ">
          Data
        </button>
        <button className="py-1 px-4 rounded-full font-bold text-gray-400 border-2 border-gray-400 hover:border-gray-800 hover:text-gray-800 ">
          Coumputer Science
        </button>
        <button className="py-1 px-4 rounded-full font-bold text-gray-400 border-2 border-gray-400 hover:border-gray-800 hover:text-gray-800 ">
          Science
        </button>
      </div>
      <div>
        <h1 className="text-xl py-6 font-bold">New Courses</h1>
        <CourseCard cousreList={cousreList} />
      </div>
    </div>
  );
};

export default CourseContent;
