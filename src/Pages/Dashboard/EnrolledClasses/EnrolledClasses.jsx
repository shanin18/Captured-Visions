import React, { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
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
import { BsTrash3 } from "react-icons/bs";

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

const EnrolledClasses = () => {
  const { loading } = useContext(AuthContext);
  const headerItems = [
    "ClassesNames",
    "TotalPrice",
    "Quantity",
    "Email",
    "Transaction Id",
    "Date",
  ];

  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["myEnrolledClasses"],
    enabled: !loading,
    queryFn: () =>
      fetch("http://localhost:5000/payments").then((res) => res.json()),
  });

  console.log(enrolledClasses);
  return (
    <div>
      <SectionTitle title="My Enrolled Classes"></SectionTitle>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ClassesNames</StyledTableCell>
              <StyledTableCell>TotalPrice</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Transaction Id</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enrolledClasses?.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell>{item.selectedClassesNames?.map(item => item)}</StyledTableCell>
                <StyledTableCell>${item.totalPrice}</StyledTableCell>
                <StyledTableCell>{item.quantity}</StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell>{item.date}</StyledTableCell>
                <StyledTableCell>{item.transactionId}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EnrolledClasses;
