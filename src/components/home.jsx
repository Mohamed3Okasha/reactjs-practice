import React, { Component } from "react";
import LanguageSwitcher from "./languageSwitcher";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <>
      <h1>Home...</h1>
      <LanguageSwitcher />
    </>
  );
};

export default Home;
