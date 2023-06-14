import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BtnContained from "../../../components/Buttons/BtnContained";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2800}
        showThumbs={false}
      >
        <div className="h-[400px] md:h-[600px] bg-[url('https://i.ibb.co/z43w79b/6.jpg')] bg-cover bg-center">
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px] px-2">
              <h2 className="text-white font-poppins text-3xl md:text-4xl font-medium flex">
                Want To Learn
                <Fade delay={1e3} cascade damping={1e-1}>
                  <span className="text-[#77bef8] md:ml-2"> Photography?</span>
                </Fade>
              </h2>
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
        <div className="h-[400px] md:h-[600px] bg-[url('https://i.ibb.co/3r15hMF/8.jpg')] bg-cover bg-center">
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px] px-2">
              <h2 className="text-white font-poppins text-3xl md:text-4xl font-medium flex">
                Want To Learn
                <Fade delay={1e3} cascade damping={1e-1}>
                  <span className="text-[#77bef8] md:ml-2"> Photography?</span>
                </Fade>
              </h2>
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

        {/* banner-3 */}
        <div className="h-[400px] md:h-[600px] bg-[url('https://i.ibb.co/m09yLzM/7.jpg')] bg-cover bg-center">
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px] px-2">
              <h2 className="text-white font-poppins text-3xl  md:text-4xl font-medium flex">
                Want To Learn
                <Fade delay={1e3} cascade damping={1e-1}>
                  <span className="text-[#77bef8] md:ml-2"> Photography?</span>
                </Fade>
              </h2>
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

        {/* banner-4 */}
        <div className="h-[400px] md:h-[600px] bg-[url('https://i.ibb.co/R4X9yP7/9.jpg')] bg-cover bg-center">
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px] px-2">
              <h2 className="text-white font-poppins text-3xl  md:text-4xl font-medium flex">
                Want To Learn
                <Fade delay={1e3} cascade damping={1e-1}>
                  <span className="text-[#77bef8] md:ml-2"> Photography?</span>
                </Fade>
              </h2>
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

        {/* banner-5 */}
        <div className="h-[400px] md:h-[600px] bg-[url('https://i.ibb.co/QMZ2cYT/10.jpg')] bg-cover bg-center">
          <div className="bg-black absolute inset-0 bg-opacity-50 flex justify-center items-center">
            <div className="w-[600px] px-2">
              <h2 className="text-white font-poppins text-3xl  md:text-4xl font-medium flex">
                Want To Learn
                <Fade delay={1e3} cascade damping={1e-1}>
                  <span className="text-[#77bef8] md:ml-2"> Photography?</span>
                </Fade>
              </h2>
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
      </Carousel>
    </div>
  );
};

export default Banner;
