import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Course from "../assets/course.svg";
import HomeLogo from "../assets/homeLogo.svg";
import search from "../assets/search.svg";
import power from "../assets/power.svg";
import menu from "../assets/menu.svg";

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  const isHomeActive = location.pathname === "/dashboard";
  const isCourseActive = location.pathname === "/course";

  return (
    <header className="flex justify-between items-center py-4 px-[120px] shadow-md">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900 mr-4 CatamaranFont tracking-wide">
          Brilliant
        </h1>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            isHomeActive ? "border-b-4 border-black" : ""
          }`}
          onClick={() => handleNavigate("/dashboard")}
        >
          <img src={HomeLogo} alt="home logo" className="w-5 h-5" />
          <h4
            className={`text-lg font-semibold ${
              isHomeActive ? "text-black" : "text-gray-400"
            }`}
          >
            Home
          </h4>
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            isCourseActive ? "border-b-4 border-black" : ""
          }`}
          onClick={() => handleNavigate("/course")}
        >
          <img src={Course} alt="course logo" className="w-5 h-5" />
          <h4
            className={`text-lg font-semibold ${
              isCourseActive ? "text-black" : "text-gray-400"
            }`}
          >
            Course
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <input
            type="text"
            className="w-[100%] pl-10 pr-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <img
            src={search}
            alt="search"
            className="w-5 h-5 absolute transform -translate-y-1/2 left-2 top-1/2"
          />
        </div>
        <button
          className="py-1 px-4 rounded-full font-bold text-green-600 border-2 border-green-600 hover:border-green-800 hover:text-green-800 "
          onClick={() => handleNavigate("/login")}
        >
          Gift premium
        </button>
        <button
          className="flex items-center py-1 px-4 rounded-full font-bold border-2 border-gray-400 hover:border-gray-600"
          onClick={() => handleNavigate("/")}
        >
          1
          <img src={power} alt="power icon" className="w-5 h-5" />
        </button>
        <img src={menu} alt="menu" className="w-5 h-5" />

        <button
          className="py-1 px-4 rounded-full font-bold text-gray-600 border-2 border-gray-600 hover:border-gray-800 hover:text-gray-800 "
          onClick={() => handleLogout()}
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
