import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo/logo.png";
import { Fragment, useContext, useEffect, useState } from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import BtnOutline from "../../components/Buttons/BtnOutline";
import { AuthContext } from "../../Context/AuthProvider";
import img from "../../assets/Images/logo/logo.png"
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const [shadow, setShadow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <ul className={`flex items-center gap-8 font-poppins dark:text-white`}>
      <li onClick={() => setIsActive("home")}>
        <Link to="/" className={isActive === "home" && "text-[#77bef8]"}>
          Home
        </Link>
      </li>
      <li onClick={() => setIsActive("instructors")}>
        <Link
          to="/instructors"
          className={isActive === "instructors" && "text-[#77bef8]"}
        >
          Instructors
        </Link>
      </li>
      <li onClick={() => setIsActive("classes")}>
        <Link
          to="/classes"
          className={isActive === "classes" && "text-[#77bef8]"}
        >
          Classes
        </Link>
      </li>
      <li onClick={() => setIsActive("dashboard")}>
        <Link
          to="/dashboard"
          className={isActive === "dashboard" && "text-[#77bef8]"}
        >
          Dashboard
        </Link>
      </li>
      <li>
        {user ? (
          <Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* <Tooltip title="Account settings"> */}
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Tooltip title={user?.displayName}>

                    <Avatar className="dark:border-2 border-green-400" alt="Remy Sharp" src={user?.photoURL} />
                  </Tooltip>
                </IconButton>
              {/* </Tooltip> */}
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  mt: 1.5,
                  bgcolor: "gray",
                  color: "white",
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "gray",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem className="font-poppins" onClick={handleLogOut}>
                Logout
              </MenuItem>
            </Menu>
          </Fragment>
        ) : (
          <Link to="/login">
            <BtnOutline text="Login"></BtnOutline>
          </Link>
        )}
      </li>
    </ul>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        shadow && "shadow-xl fixed w-full"
      } z-40 dark:bg-[#0b111e] bg-white py-4 px-8 transition-all duration-300 ease-in-out border-b dark:border-0`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="w-28" src={logo} alt="logo" />
          </Link>
        </div>
        <div>{navItems}</div>
        <div>
          <DarkMode></DarkMode>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
