import React, { useState } from "react";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNavigateToSignUp = () => {
    navigate("/sign-up");
  };

  const handleLogin = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUsers.some(
      (user: { email: string }) => user.email === email
    );

    if (userExists) {
      localStorage.setItem("loggedInUser", email);
      setError("");
      navigate("/dashboard");
    } else {
      setError("Email not found. Please sign up first.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 rounded-lg">
        <h2 className="text-[24px] font-bold text-center mb-6">
          Log in to your account to <br /> discover your personalized <br />{" "}
          learning path
        </h2>
        <div className="flex gap-4 mb-5">
          <button className="flex-1 flex items-center justify-center py-3 border-t border-l border-r border-gray-300 border-b-4 border-b-gray-300 rounded-full hover:border-gray-400">
            <img src={google} alt="Google" className="w-6 h-6 mr-2" />
          </button>
          <button className="flex-1 flex items-center justify-center py-3 border-t border-l border-r border-gray-300 border-b-4 border-b-gray-300 rounded-full hover:border-gray-400">
            <img src={facebook} alt="Facebook" className="w-6 h-6 mr-2" />
          </button>
        </div>
        <div className="flex items-center justify-center mb-5">
          <div className="text-gray-400">--------------------------</div>
          <span className="text-gray-500 text-sm px-4"> OR </span>
          <div className="text-gray-400">--------------------------</div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition duration-200"
        >
          Log In
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          By clicking above, I agree to Brilliant’s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="text-sm text-gray-500 text-center mt-6">
          New user?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={handleNavigateToSignUp}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
