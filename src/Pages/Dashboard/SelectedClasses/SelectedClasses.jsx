import React from "react";
import SectionTitle from "../../../components/SectionTitle";
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
import BtnContained from "../../../components/Buttons/BtnContained";
import { Link } from "react-router-dom";
import useMySelectedClasses from "../../../Hooks/useMySelectedClasses";
import useTitle from "../../../Hooks/useTitle";

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

const SelectedClasses = () => {
  useTitle("Selected Classes");
  const [refetch, mySelectedClasses] = useMySelectedClasses();

  const totalPrice = mySelectedClasses?.reduce(
    (sum, item) => sum + item.price,
    0
  );

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
          .delete(
            `https://captured-visions-server-shanin18.vercel.app/selectedClasses/${id}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`,
              },
            }
          )
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
        {mySelectedClasses.length > 0 && (
          <div className="flex items-center justify-end gap-4 mb-5">
            <h3 className="text-2xl dark:text-white font-poppins">
              Total price: ${totalPrice}
            </h3>
          </div>
        )}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Instructor</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mySelectedClasses?.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component="th" scope="row">
                    <img className="w-28 rounded" src={item.image} alt="" />
                  </StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.instructor}</StyledTableCell>
                  <StyledTableCell>${item.price}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex items-center gap-5">
                      <Link to={`/dashboard/payment/${item._id}`}>
                        <BtnContained text="Pay"></BtnContained>
                      </Link>
                      <IconButton
                        onClick={() => handleClassDelete(item._id)}
                        aria-label="delete"
                        size="small"
                      >
                        <BsTrash3 className="text-red-600"></BsTrash3>
                      </IconButton>
                    </div>
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
