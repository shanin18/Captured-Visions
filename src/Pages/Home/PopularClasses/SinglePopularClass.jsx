import React from "react";
import LazyLoad from "react-lazy-load";

const SinglePopularClass = ({ popularClass }) => {
  const { image, name, instructor, enrolled } = popularClass;
  
  return (
    <div className="relative rounded overflow-hidden">
      <LazyLoad>
        <img src={image} alt="class image" className="h-[300px] w-full" />
      </LazyLoad>
      <div className="bg-black absolute inset-0 bg-opacity-0 hover:bg-opacity-60 duration-300 ease-in-out">
        <div className="flex flex-col justify-end h-full p-5 hover:pb-10 duration-300 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="font-poppins text-white text-2xl font-medium">
            {name}
          </h3>
          <h4 className="font-poppins text-lg my-3 text-[#77bef8]">
            By {instructor}
          </h4>
          <p className="font-poppins text-white text-sm">
            Enrolled by {enrolled} peoples.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularClass;
