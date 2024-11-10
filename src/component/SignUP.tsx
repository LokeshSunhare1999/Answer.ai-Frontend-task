import React, { useState } from "react";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    general: "",
  });

  const handleNavigate = () => navigate("/login");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: email
        ? validateEmail(email)
          ? ""
          : "Invalid email format"
        : "Email is required",
      password: password
        ? validatePassword(password)
          ? ""
          : "Password must be at least 8 characters with uppercase, lowercase, number, and special character"
        : "Password is required",
      firstName: firstName ? "" : "First name is required",
      lastName: lastName ? "" : "Last name is required",
      age: age ? "" : "Age is required",
      general: "",
    };

    if (Object.values(newErrors).some((err) => err !== "")) {
      setError(newErrors);
      return;
    }

    const userData = {
      firstName,
      lastName,
      age,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const isEmailTaken = existingUsers.some(
        (user: { email: string }) => user.email === email
      );

      if (isEmailTaken) {
        setError({ ...newErrors, general: "Email is already registered." });
        return;
      }

      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      localStorage.setItem("loggedInUser", email);

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setAge("");
      setError({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        age: "",
        general: "",
      });

      navigate("/dashboard");
    } catch (err) {
      setError({
        ...newErrors,
        general: "An error occurred while signing up.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 rounded-lg">
        <h2 className="text-[24px] font-bold text-center mb-4">
          Create a free account to <br /> discover your personalized <br />{" "}
          learning path
        </h2>

        <div className="flex gap-4 mb-4">
          <button className="flex-1 flex items-center justify-center py-3 border rounded-full hover:border-gray-400">
            <img src={google} alt="Google" className="w-6 h-6" />
          </button>
          <button className="flex-1 flex items-center justify-center py-3 border rounded-full hover:border-gray-400">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mt-4"
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
          <div className="flex mt-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border rounded-tl-lg rounded-bl-lg"
              />
              {error.firstName && (
                <p className="text-red-500 text-sm">{error.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border rounded-tr-lg rounded-br-lg"
              />
              {error.lastName && (
                <p className="text-red-500 text-sm">{error.lastName}</p>
              )}
            </div>
          </div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border rounded-lg mt-4"
          />
          {error.age && <p className="text-red-500 text-sm">{error.age}</p>}

          {error.general && (
            <p className="text-red-500 text-center mb-4">{error.general}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white mt-4 rounded-full"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Existing user?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={handleNavigate}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
