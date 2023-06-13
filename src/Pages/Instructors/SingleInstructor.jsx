import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LazyLoad from "react-lazy-load";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const SingleInstructor = ({ instructor, handleOpen, instructorInfo }) => {
  const [open, setOpen] = useState(false);

  const { _id, name, image, email, classesTaken, classNamesTaken } =
    instructorInfo;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div data-aos="fade-up" className=" overflow-hidden">
      <div className="rounded-tl-3xl rounded-br-3xl dark:border border-[#77bef8] overflow-hidden">
        <img
          onClick={() => handleOpen(instructor._id, setOpen)}
          src={instructor.image}
          className="w-[250px] h-[330px] cursor-pointer"
          alt="instructor image"
        />
      </div>

      {/* modal here to see the instructors details */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* modal content box */}
        <Box sx={style} className="bg-[#0b111e] rounded-md md:w-[450px]">
          <div className="flex items-center justify-end py-2 px-3">
            <h2 className="font-poppins text-white capitalize flex-1 text-center">
              {name}
            </h2>
            <button
              onClick={handleClose}
              className="w-8 h-8 hover:bg-[#ffffff80] bg-[#ffffff1a] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <RxCross2 className="text-white"></RxCross2>
            </button>
          </div>

          <div className="flex flex-col-reverse md:flex-row px-8 py-4">
            <div className="md:w-2/3 mt-3 md:mt-0 space-y-2">
              <p className="text-white font-poppins capitalize text-sm">
                Email: {email}
              </p>
              <p className="text-white font-poppins capitalize text-sm">
                Classes Taken: {classesTaken}
              </p>
              <details className="w-fit cursor-pointerl">
                <summary className="text-white font-poppins capitalize text-sm">
                  class names :
                </summary>
                <ul className="pb-2">
                  {classNamesTaken?.map((className) => (
                    <li
                      className="text-white font-poppins capitalize text-sm space-y-1"
                      key={className}
                    >
                      {className}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
            <div className="w-1/3">
              <LazyLoad>
                <img src={image} className="rounded" alt="instructor image" />
              </LazyLoad>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SingleInstructor;
