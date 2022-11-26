import React from "react";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import GetApp from "./components/GetApp/GetApp";
import Status from "./components/Status/Status";
import Testomonial from "./components/Testomonial/Testomonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Status />
      <Testomonial />
      <Contact />
      <GetApp />
    </>
  );
};

export default Home;
