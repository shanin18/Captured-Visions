import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo/logo.png";
import { Fragment, useContext, useEffect, useState } from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import BtnOutline from "../../components/Buttons/BtnOutline";
import { AuthContext } from "../../Context/AuthProvider";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { MdLogout } from "react-icons/md";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useMyClasses from "../../Hooks/useMYClasses";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [fold, setFold] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const [, myClasses] = useMyClasses()

  useEffect(() => {
    setIsActive(location.pathname.split("/")[1]);
  }, [location]);

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
      <li>
        <Link to="/" className={isActive === "" && "text-[#77bef8]"}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/instructors"
          className={isActive === "instructors" && "text-[#77bef8]"}
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          to="/classes"
          className={isActive === "classes" && "text-[#77bef8]"}
        >
          Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/selectedClasses">
          <IconButton aria-label="cart">
            <Badge badgeContent={myClasses?.length} color="secondary">
              <AiOutlineShoppingCart className="dark:text-white text-xl" />
            </Badge>
          </IconButton>
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
              {/* <Tooltip title="User name"> */}
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Tooltip title={user?.displayName}>
                  <Avatar
                    className="dark:border-2 border-green-400"
                    src={user?.photoURL}
                  />
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
                <MdLogout className="mr-2"></MdLogout> Logout
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
        {/* desktop view menu */}
        <div className="hidden lg:block">{navItems}</div>

        {/* mobile view menu */}
        <div onClick={() => setFold(!fold)} className="lg:hidden order-3">
          {!fold ? (
            <HiBars3 className="text-2xl dark:text-white"></HiBars3>
          ) : (
            <HiXMark className="text-2xl dark:text-white"></HiXMark>
          )}
        </div>
        <ul
          className={`flex flex-col lg:hidden h-[calc(100vh-80px)] z-30 py-10 absolute top-[80px] dark:bg-[#0b111e] bg-white w-[280px] transition-all duration-300 ease-in-out left-0 ${
            !fold && " left-[-400px]"
          } items-center gap-8 font-poppins dark:text-white`}
        >
          <li onClick={() => setFold(!fold)}>
            <Link to="/" className={isActive === "" && "text-[#77bef8]"}>
              Home
            </Link>
          </li>
          <li onClick={() => setFold(!fold)}>
            <Link
              to="/instructors"
              className={isActive === "instructors" && "text-[#77bef8]"}
            >
              Instructors
            </Link>
          </li>
          <li onClick={() => setFold(!fold)}>
            <Link
              to="/classes"
              className={isActive === "classes" && "text-[#77bef8]"}
            >
              Classes
            </Link>
          </li>
          <li onClick={() => setFold(!fold)}>
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
                  {/* <Tooltip title="User name"> */}
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Tooltip title={user?.displayName}>
                      <Avatar
                        className="dark:border-2 border-green-400"
                        src={user?.photoURL}
                      />
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
                    <MdLogout className="mr-2"></MdLogout> Logout
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

        <div>
          <DarkMode></DarkMode>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
