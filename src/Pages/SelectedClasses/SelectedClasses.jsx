import React from "react";
import useMyClasses from "../../Hooks/useMYClasses";
import SectionTitle from "../../components/SectionTitle";
import {
  IconButton,
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
import { BsTrash3 } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

const SelectedClasses = () => {
  const [refetch, myClasses] = useMyClasses();

  const handleClassDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Class will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/selectedClasses/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Class has been deleted successfully",
                "success"
              );
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  return (
    <div>
      <SectionTitle title="My Selected Classes"></SectionTitle>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Instructor</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myClasses.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component="th" scope="row">
                    <img className="w-28 rounded" src={item.image} alt="" />
                  </StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.instructor}</StyledTableCell>
                  <StyledTableCell>{item.price}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton aria-label="delete" size="small">
                      <BsTrash3
                        onClick={() => handleClassDelete(item._id)}
                        className="text-red-600"
                      ></BsTrash3>
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default SelectedClasses;