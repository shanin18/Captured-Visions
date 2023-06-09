import { Button } from "@mui/material";
import React from "react";

const BtnContained = ({ text }) => {
  const contained = {
    backgroundColor: "#77bef8",
    fontFamily: "poppins",
    boxShadow: "0 0 0 0",
    textTransform: "capitalize",
    fontSize: "17px",
  };
  return (
    <div>
      <Button variant="contained" style={contained}>
        {text}
      </Button>
    </div>
  );
};

export default BtnContained;
