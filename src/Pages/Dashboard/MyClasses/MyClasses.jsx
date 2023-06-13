import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import {
  Badge,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import styled from "styled-components";
import { AiOutlineMessage } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import useMyClasses from "../../../Hooks/useMYClasses";
import useTitle from "../../../Hooks/useTitle";
import MyClassesModal from "../../../components/MyClassesModal";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
    paddingTop: 30,
    paddingBottom: 30,
    fontFamily: "poppins",
    fontSize: 16,
    fontWeight: "semibold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "poppins",
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: "#303030",
  },
  "&:nth-of-type(even)": {
    // backgroundColor: "#1e1e1e",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MyClasses = () => {
  useTitle("My Classes");
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [, myAddClasses] = useMyClasses();

  const handleSeeFeedback = (message) => {
    setOpen(!open);
    setFeedback(message);
  };

  return (
    <div>
      <SectionTitle title="my classes"></SectionTitle>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Instructor</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Total Enrolled</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myAddClasses?.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component="th" scope="row">
                    <img className="w-28 rounded" src={item.image} alt="" />
                  </StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.instructor}</StyledTableCell>
                  <StyledTableCell>{item.instructorEmail}</StyledTableCell>
                  <StyledTableCell>${item.price}</StyledTableCell>
                  <StyledTableCell>{item.enrolled}</StyledTableCell>
                  <StyledTableCell>{item.status}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex items-center gap-5">
                      {item.feedback ? (
                        <Badge color="secondary" variant="dot">
                          <AiOutlineMessage
                            onClick={() => handleSeeFeedback(item.feedback)}
                            className="text-xl rounded-full hover:text-[#77bef8] duration-300 cursor-pointer"
                          ></AiOutlineMessage>
                        </Badge>
                      ) : (
                        <Badge color="secondary">
                          <AiOutlineMessage
                            onClick={() => handleSeeFeedback(item.feedback)}
                            className="text-xl rounded-full hover:text-[#77bef8] duration-300 cursor-pointer"
                          ></AiOutlineMessage>
                        </Badge>
                      )}

                      <Link to={`/dashboard/editAClass/${item._id}`}>
                        <FiEdit className="text-xl rounded-full hover:text-[#77bef8] duration-300 cursor-pointer"></FiEdit>
                      </Link>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <MyClassesModal
        feedback={feedback}
        open={open}
        setOpen={setOpen}
      ></MyClassesModal>
    </div>
  );
};

export default MyClasses;
