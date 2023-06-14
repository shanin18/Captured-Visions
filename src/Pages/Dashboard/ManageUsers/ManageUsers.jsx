import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";

import {
  Button,
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
import styled, { useTheme } from "styled-components";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../Context/AuthProvider";

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

const ManageUsers = () => {
  useTitle("Manage Users");

  const token = localStorage.getItem("access-token");

  const { refetch, data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://captured-visions-server-shanin18.vercel.app/users",
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://captured-visions-server-shanin18.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ role: "admin" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://captured-visions-server-shanin18.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ role: "instructor" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is instructor now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle title="Manage Users"></SectionTitle>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user, index) => (
                <StyledTableRow key={user._id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{user.name}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.role}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex flex-wrap gap-4">
                      {user.role === "admin" ? (
                        <Button
                          disabled
                          variant="contained"
                          size="small"
                          style={{
                            backgroundColor: "#77bef8",
                            fontFamily: "poppins",
                          }}
                          className="bg-[#77bef8] font-poppins"
                        >
                          <FaUserShield className="text-xl mr-2"></FaUserShield>
                          Make Admin
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleMakeAdmin(user)}
                          variant="contained"
                          size="small"
                          style={{
                            backgroundColor: "#77bef8",
                            fontFamily: "poppins",
                          }}
                          className="bg-[#77bef8] font-poppins"
                        >
                          <FaUserShield className="text-xl mr-2"></FaUserShield>
                          Make Admin
                        </Button>
                      )}

                      {user.role === "instructor" ? (
                        <Button
                          disabled
                          variant="contained"
                          size="small"
                          style={{
                            backgroundColor: "#77bef8",
                            fontFamily: "poppins",
                          }}
                          className="bg-[#77bef8] font-poppins"
                        >
                          <FaUserTie className="text-xl mr-2"></FaUserTie>
                          Make Instructor
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleMakeInstructor(user)}
                          variant="contained"
                          size="small"
                          style={{
                            backgroundColor: "#77bef8",
                            fontFamily: "poppins",
                          }}
                          className="bg-[#77bef8] font-poppins"
                        >
                          <FaUserTie className="text-xl mr-2"></FaUserTie>
                          Make Instructor
                        </Button>
                      )}
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

export default ManageUsers;
