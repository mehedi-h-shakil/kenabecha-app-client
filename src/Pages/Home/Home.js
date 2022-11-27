import { useQuery } from "@tanstack/react-query";
import React from "react";
import Advertise from "./components/Advertise/Advertise";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import GetApp from "./components/GetApp/GetApp";
import Status from "./components/Status/Status";
import Testomonial from "./components/Testomonial/Testomonial";

const Home = () => {
  const { data: ads = [] } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch("https://kenabecha-server.vercel.app/advertise");
      const data = await res.json();
      return data;
    },
  });

  // console.log(ads);

  return (
    <>
      <Banner />
      <Categories />
      {ads.length > 0 && <Advertise ads={ads} />}
      <Status />
      <Testomonial />
      <Contact />
      <GetApp />
      {/* {ads.map((ad) => (
        <Advertise ad={ad} /> */}
      {/* ))} */}
    </>
  );
};

export default Home;
