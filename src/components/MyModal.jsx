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

const MyModal = ({ setOpen, open, handleMessage }) => {


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
            <h2 className="font-poppins text-white capitalize flex-1 text-center">
              Send Feedback
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 hover:bg-[#ffffff80] bg-[#ffffff1a] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <RxCross2 className="text-white"></RxCross2>
            </button>
          </div>
          <form onSubmit={handleMessage} className="p-2">
            <textarea
            placeholder="Type here.."
              className="w-full h-[220px] rounded-md font-poppins text-xs md:text-sm p-2 outline-none"
              name="message"
              cols="30"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-[#77bef8] px-5 py-1 rounded font-poppins text-sm font-medium text-white mt-3"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
