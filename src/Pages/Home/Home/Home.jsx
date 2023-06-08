import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
