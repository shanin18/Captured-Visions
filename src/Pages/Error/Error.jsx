import React from "react";
import image from "../../assets/Images/error/error.jpg";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const errorInfo = useRouteError();
  const { error, status } = errorInfo;

  return (
    <div
      className="h-screen flex justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pt-32 flex bg-black inset-0 absolute bg-opacity-50 items-center flex-col">
        <h1 className="text-white text-4xl font-bold font-poppins text-center mb-24">
          ERROR
        </h1>
        <h1 className="text-9xl mb-5 font-bold text-[#ffffff80] font-poppins text-center">
          {status}
        </h1>
        <h1 className="text-white text-3xl font-bold font-poppins text-center">
          Page Not Found
        </h1>
        <p className="text-xl font-poppins mt-5 mb-3 text-white">
          {error?.message}
        </p>
        <Link
          to="/"
          className="text-white border-2 border-white px-6 py-2 rounded mt-5 font-medium hover:shadow-2xl backdrop-blur-lg duration-300"
        >
          Back to Home
        </Link>
        <p className="font-poppins text-[#ffffff80] mt-20">
          Copyright &copy; {new Date().getFullYear()} Captured Visions. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Error;
