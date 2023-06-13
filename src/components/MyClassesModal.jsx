import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const MyClassesModal = ({ setOpen, open, feedback }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* modal content box */}
        <Box
          sx={style}
          className="bg-[#0b111e] rounded-md md:w-[450px] w-[60%]"
        >
          <div className="flex items-center justify-end py-2 px-3">
            {feedback ? (
              <h2 className="font-poppins text-white capitalize flex-1 text-center">
                Feedback from admin
              </h2>
            ) : (
              <h2 className="font-poppins font-medium text-white flex-1 text-center">
                No feedback yet!!!
              </h2>
            )}

            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 hover:bg-[#ffffff80] bg-[#ffffff1a] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <RxCross2 className="text-white"></RxCross2>
            </button>
          </div>
          {feedback && (
            <textarea
              defaultValue={feedback}
              readOnly
              className="p-2 rounded-b-md  w-full outline-none font-poppins text-sm h-[200px]"
              cols="30"
            ></textarea>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default MyClassesModal;
