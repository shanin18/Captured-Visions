import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SingleInstructor = ({ instructor }) => {
  const [open, setOpen] = useState(false);

  const { name, image, email, classesTaken, classNamesTaken } = instructor;
  const handleOpen = () =>{
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="rounded-tl-3xl hover:shadow-lg duration-300 ease-in-out dark:shadow-[#77bef8] rounded-br-3xl dark:border border-[#77bef8] overflow-hidden">
        <img
          onClick={handleOpen}
          src={image}
          className="w-full h-[350px] cursor-pointer"
          alt="instructor image"
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-red-500">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3>this is a modal</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default SingleInstructor;
