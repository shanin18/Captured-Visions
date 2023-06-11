import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider2 from "../../../assets/Images/slider/slider1.jpg";
import slider1 from "../../../assets/Images/slider/slider2.jpg";
import slider3 from "../../../assets/Images/slider/slider3.jpg";
import slider4 from "../../../assets/Images/slider/slider4.jpg";
import slider5 from "../../../assets/Images/slider/slider5.jpg";
import BtnContained from "../../../components/Buttons/BtnContained";
import {Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={2800}
        showThumbs={false}
      >
        <div>
          <img src={slider1} alt="banner img" />
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px]">
                <Slide>
                  <h2 className="text-white font-poppins text-4xl font-medium">
                    Want To Learn
                    <span className="text-[#77bef8]">Photography?</span>
                  </h2>
                </Slide>
              <p className="font-poppins text-white my-5">
                Captured Vision has what you need to take your photography toy
                the next level. We offer daily tips, resources and free
                tutorials that will help you get the most out your camera and
                create stunning photos
              </p>
              <BtnContained text="Let's Start"></BtnContained>
            </div>
          </div>
        </div>

        {/* banner-2 */}
        <div>
          <img src={slider2} alt="banner img" />
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px]">
              <h2 className="text-white font-poppins text-4xl font-medium">
                Want To Learn
                <span className="text-[#77bef8]">Photography?</span>
              </h2>
              <p className="font-poppins text-white my-5">
                has what you need to take your photography to the next level. We
                offer daily tips, resources and free tutorials that will help
                you get the most out your camera and create stunning photos
              </p>
              <BtnContained text="Let's Start"></BtnContained>
            </div>
          </div>
        </div>

        {/* banner-3 */}
        <div>
          <img src={slider3} alt="banner img" />
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px]">
              <h2 className="text-white font-poppins text-4xl font-medium">
                Want To Learn{" "}
                <span className="text-[#77bef8]">Photography?</span>
              </h2>
              <p className="font-poppins text-white my-5">
                has what you need to take your photography to the next level. We
                offer daily tips, resources and free tutorials that will help
                you get the most out your camera and create stunning photos
              </p>
              <BtnContained text="Let's Start"></BtnContained>
            </div>
          </div>
        </div>

        {/* banner-4 */}
        <div>
          <img src={slider4} alt="banner img" />
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px]">
              <h2 className="text-white font-poppins text-4xl font-medium">
                Want To Learn{" "}
                <span className="text-[#77bef8]">Photography?</span>
              </h2>
              <p className="font-poppins text-white my-5">
                has what you need to take your photography to the next level. We
                offer daily tips, resources and free tutorials that will help
                you get the most out your camera and create stunning photos
              </p>
              <BtnContained text="Let's Start"></BtnContained>
            </div>
          </div>
        </div>

        {/* banner-5 */}
        <div>
          <img src={slider5} alt="banner img" />
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px]">
              <h2 className="text-white font-poppins text-4xl font-medium">
                Want To Learn{" "}
                <span className="text-[#77bef8]">Photography?</span>
              </h2>
              <p className="font-poppins text-white my-5">
                has what you need to take your photography to the next level. We
                offer daily tips, resources and free tutorials that will help
                you get the most out your camera and create stunning photos
              </p>
              <BtnContained text="Let's Start"></BtnContained>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
