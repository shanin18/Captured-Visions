import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <ContactUs></ContactUs>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
