import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LazyLoad from "react-lazy-load";
import { RxCross2 } from "react-icons/rx";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const SingleInstructor = ({ instructor, handleOpen, instructorInfo }) => {
  const [open, setOpen] = useState(false);

  const { name, image, email, classesTaken, classNamesTaken } = instructorInfo;

  const handleClose = () => {
    console.log("hello");
    setOpen(false);
  };

  return (
    <>
      <div className="rounded-tl-3xl hover:shadow-lg duration-300 ease-in-out dark:shadow-[#77bef8] rounded-br-3xl dark:border border-[#77bef8] overflow-hidden">
        <img
          onClick={() => handleOpen(instructor._id, setOpen)}
          src={instructor.image}
          className="w-full h-[350px] cursor-pointer"
          alt="instructor image"
        />
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="bg-[#0b111e] rounded-md w-full mx-2 md:mx-0 md:w-[450px]"
        >
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

          <div className="flex px-8 py-4">
            <div className="w-2/3 space-y-2">
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

              <Link to="/">
                <button className="font-poppins text-white text-sm bg-[#77bef8] w-fit px-3 py-1 rounded mt-2">
                  Show classes
                </button>
              </Link>
            </div>
            <div className="w-1/3">
              <LazyLoad>
                <img src={image} className="rounded" alt="instructor image" />
              </LazyLoad>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default SingleInstructor;
