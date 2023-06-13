import React from "react";
import { RiCameraLensFill } from "react-icons/ri";

const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <RiCameraLensFill className="text-4xl text-[#77bef8] animate-spin"></RiCameraLensFill>
    </div>
  );
};

export default Spinner;
