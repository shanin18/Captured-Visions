import React, { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import { FcExpand } from "react-icons/fc";
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
import useTitle from "../../../Hooks/useTitle";
import usePayments from "../../../Hooks/usePayments";

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

const PaymentHistory = () => {
  useTitle("Payment History")
  const paymentsData = usePayments();

  return (
    <div>
      <SectionTitle title="Payment History"></SectionTitle>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Transaction Id</StyledTableCell>
              <StyledTableCell>Items</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentsData?.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell>
                  {new Date(item.date).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell>
                  {new Date(item.date).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                  })}
                </StyledTableCell>
                <StyledTableCell>${item.price}</StyledTableCell>
                <StyledTableCell>{item.status}</StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell>{item.transactionId}</StyledTableCell>
                <StyledTableCell>
                  <p>{item.selectedClassName}</p>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PaymentHistory;
