import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SingleInstructorCard = ({ popularInstructor }) => {
  const [fill, setFill] = useState(false);
  const { image, name, students } = popularInstructor;
  useEffect(() => {
    if (fill) {
      toast.success("Added To Favorite", {
        position: "top-center",
        theme:"dark"
      });
    }
  }, [fill]);

  return (
    <div data-aos="fade-right" className="overflow-hidden border dark:border-[#77bef8] hover:shadow-md ease-in-out duration-300 dark:hover:shadow-[#77bef8] rounded-md text-center p-4 ">
      <div className="relative">
        <p className="font-poppins text-xs px-3 py-2 rounded bg-[#77bef8] text-white w-fit absolute ">
          POPULAR
        </p>
        <img
          className="w-24 rounded-full mx-auto p-2 border-2 dark:border-[#77bef8]"
          src={image}
          alt="instructor image"
        />
        <h3 className="font-poppins dark:text-white text-lg font-medium mt-4 mb-3">
          {name}
        </h3>
        <div className="flex gap-8 w-fit mx-auto">
          <div className="flex gap-1">
            <AiOutlineUser className="text-xl dark:text-white"></AiOutlineUser>
            <p className="font-poppins dark:text-white">{students}</p>
          </div>
          <div className="z-20" onClick={() => setFill(!fill)}>
            {!fill ? (
              <AiOutlineHeart className="dark:text-white text-xl cursor-pointer"></AiOutlineHeart>
            ) : (
              <AiFillHeart className="text-xl cursor-pointer text-red-600 "></AiFillHeart>
            )}
          </div>
        </div>

        <div
          className={`space-y-4 absolute inset-0 flex flex-col items-end justify-center -mr-10 hover:mr-0 transition-all duration-300 ease-in-out`}
        >
          <FaFacebookF className="text-lg dark:text-white dark:hover:text-[#77bef8] hover:text-[#77bef8] cursor-pointer hover:scale-150 duration-300 ease-in-out"></FaFacebookF>
          <FaYoutube className="text-lg dark:text-white dark:hover:text-[#77bef8] hover:text-[#77bef8] cursor-pointer hover:scale-150 duration-300 ease-in-out"></FaYoutube>
          <FaTwitter className="text-lg dark:text-white dark:hover:text-[#77bef8] hover:text-[#77bef8] cursor-pointer hover:scale-150 duration-300 ease-in-out"></FaTwitter>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructorCard;
