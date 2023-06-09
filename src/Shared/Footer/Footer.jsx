import React from "react";
import logo from "../../assets/Images/logo/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t px-6">
      <div className="flex flex-wrap justify-between space-y-3 container mx-auto pt-5 pb-8">
        <div className="w-full mb-4 lg:w-1/4">
          <img src={logo} className="w-24" alt="Captured Visions Logo" />
          <p className="text-sm text-gray-600 mt-2 lg:mt-6 font-poppins dark:text-gray-400 space-y-1">
            Our mission is to inspire and educate aspiring photographers,
            equipping them with the tools and techniques needed to capture and
            express their creative vision.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-20 gap-y-8">
          <div>
            <h3 className="font-medium mb-2 dark:text-white font-poppins">
              Services
            </h3>
            <ul className="list-none text-sm font-poppins text-gray-600 dark:text-gray-400 space-y-1">
              <li className="hover:underline cursor-pointer">
                Photography Workshops
              </li>
              <li className="hover:underline cursor-pointer">
                Portfolio Reviews
              </li>
              <li className="hover:underline cursor-pointer">
                Photography Tours
              </li>
              <li className="hover:underline cursor-pointer">Studio Rentals</li>
              <li className="hover:underline cursor-pointer">
                Equipment Rental
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2 dark:text-white font-poppins">
              Classes
            </h3>
            <ul className="list-none text-sm font-poppins text-gray-600 dark:text-gray-400 space-y-1">
              <li className="hover:underline cursor-pointer">
                Introduction to Photography
              </li>
              <li className="hover:underline cursor-pointer">
                Portrait Photography
              </li>
              <li className="hover:underline cursor-pointer">
                Landscape Photography
              </li>
              <li className="hover:underline cursor-pointer">
                Studio Lighting
              </li>
              <li className="hover:underline cursor-pointer">
                Photo Editing and Retouching
              </li>
              <li className="hover:underline cursor-pointer">
                Street Photography
              </li>
              <li className="hover:underline cursor-pointer">
                Product Photography
              </li>
              <li className="hover:underline cursor-pointer">
                Fashion Photography
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2 dark:text-white font-poppins">
              Company
            </h3>
            <ul className="list-none text-sm font-poppins text-gray-600 dark:text-gray-400 space-y-1">
              <li className="hover:underline cursor-pointer">Visions</li>
              <li className="hover:underline cursor-pointer">Missions</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Support</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-600 border-t container mx-auto py-7 flex items-center justify-between flex-wrap gap-5">
        <p className="font-poppins text-gray-600 dark:text-gray-400 text-sm">
          Copyright &copy; {new Date().getFullYear()} Captured Visions. All
          rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <FaFacebook className="text-xl hover:text-[#77bef8] dark:text-white dark:hover:text-[#77bef8] cursor-pointer ease-in-out duration-300"></FaFacebook>
          <FaYoutube className="text-xl hover:text-[#77bef8] dark:text-white dark:hover:text-[#77bef8] cursor-pointer ease-in-out duration-300"></FaYoutube>
          <FaTwitter className="text-xl hover:text-[#77bef8] dark:text-white dark:hover:text-[#77bef8] cursor-pointer ease-in-out duration-300"></FaTwitter>
          <FaInstagram className="text-xl hover:text-[#77bef8] dark:text-white dark:hover:text-[#77bef8] cursor-pointer ease-in-out duration-300"></FaInstagram>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
