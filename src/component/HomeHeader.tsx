import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginButton = styled.button`
  border: 2px solid gray;
  &:hover {
    border: 2px solid black;
  }
`;

const HomeHeader: React.FC = () => {
  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate("/login");
  };
  return (
    <header className="flex justify-between items-center py-6 px-[120px]">
      <h1 className="text-4xl font-bold text-gray-900 CatamaranFont tracking-wide">
        Brilliant
      </h1>
      <LoginButton
        className="py-2 px-4 rounded-full font-bold"
        onClick={() => handleNavigate()}
      >
        Log in
      </LoginButton>
    </header>
  );
};

export default HomeHeader;
