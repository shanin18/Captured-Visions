import React, { useContext, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import SectionTitle from "../../../components/SectionTitle";

import {
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
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import MyModal from "../../../components/MyModal";

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

const ManageClasses = () => {
  const [open, setOpen] = useState(false);
  const [classId, setClassId] = useState("");
  useTitle("Manage Classes");
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: manageAllClasses = [] } = useQuery({
    queryKey: ["manageAllClasses", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: () =>
      fetch(
        `https://captured-visions-server-shanin18.vercel.app/manageAllClasses?email=${
          user?.email
        }&status=${true}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      ).then((res) => res.json()),
  });

  const handleClassApproved = (id) => {
    axios
      .patch(
        `https://captured-visions-server-shanin18.vercel.app/manageAllClasses/${id}`,
        {
          status: "Approved",
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Approved class successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleClassDeny = (id) => {
    axios
      .patch(
        `https://captured-visions-server-shanin18.vercel.app/manageAllClasses/${id}`,
        {
          status: "Denied",
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Denied class successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleClassFeedback = (id) => {
    setOpen(!open);
    setClassId(id);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    fetch(
      `https://captured-visions-server-shanin18.vercel.app/allClasses/${classId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ message }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setOpen(false);
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Feedback send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle title="Manage Classes"></SectionTitle>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Instructor Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Available Seats</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {manageAllClasses?.map((item, index) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <img className="w-28 rounded" src={item.image} alt="" />
                  </StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.instructor}</StyledTableCell>
                  <StyledTableCell>{item.instructorEmail}</StyledTableCell>
                  <StyledTableCell>{item.availableSeats}</StyledTableCell>
                  <StyledTableCell>{item.price}</StyledTableCell>
                  <StyledTableCell>{item.status}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex flex-wrap gap-3">
                      <button
                        disabled={
                          item.status === "Denied" || item.status === "Approved"
                        }
                        onClick={() => handleClassApproved(item._id)}
                        className="font-poppins text-sm px-3 py-1 rounded bg-[#77bef8] text-white "
                      >
                        Approve
                      </button>
                      <button
                        disabled={
                          item.status === "Denied" || item.status === "Approved"
                        }
                        onClick={() => handleClassDeny(item._id)}
                        className="font-poppins text-sm px-3 py-1 rounded bg-[#77bef8] text-white "
                      >
                        Deny
                      </button>
                      <button
                        disabled={item.status !== "Denied"}
                        onClick={() => handleClassFeedback(item._id)}
                        className="font-poppins text-sm px-3 py-1 rounded bg-[#77bef8] text-white "
                      >
                        Feedback
                      </button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <MyModal
        setOpen={setOpen}
        open={open}
        handleMessage={handleMessage}
      ></MyModal>
    </div>
  );
};

export default ManageClasses;
