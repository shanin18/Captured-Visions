import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo/logo.png";
import { useContext, useEffect, useState } from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import BtnOutline from "../../components/Buttons/BtnOutline";
import { AuthContext } from "../../Context/AuthProvider";
import { Avatar, Badge, IconButton, Tooltip } from "@mui/material";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdLogout } from "react-icons/md";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import useMySelectedClasses from "../../Hooks/useMySelectedClasses";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [fold, setFold] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const [, myClasses] = useMySelectedClasses();

  useEffect(() => {
    setIsActive(location.pathname.split("/")[1]);
  }, [location]);

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
      {user && (
        <li>
          <Link
            to={
              isAdmin?.admin
                ? "/dashboard/manageUsers"
                : isInstructor?.instructor
                ? "/dashboard/myClasses"
                : "/dashboard/selectedClasses"
            }
          >
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin?.admin && !isInstructor?.instructor && (
        <li>
          <Link to="/dashboard/selectedClasses">
            <IconButton aria-label="cart">
              <Badge badgeContent={myClasses?.length} color="secondary">
                <AiOutlineShoppingCart className="dark:text-white text-xl" />
              </Badge>
            </IconButton>
          </Link>
        </li>
      )}
      {user ? (
        <li>
          <Menu
            menuButton={
              <MenuButton>
                <Tooltip title={user?.displayName}>
                  <Avatar
                    className="dark:border-2 border-green-400"
                    src={user?.photoURL}
                  />
                </Tooltip>
              </MenuButton>
            }
            transition
          >
            <MenuItem className="font-poppins text-sm" onClick={handleLogOut}>
              <MdLogout className="mr-5"></MdLogout> Logout
            </MenuItem>
            <MenuItem disabled className="text-sm">
              <AiOutlineUser className="mr-5"></AiOutlineUser>{" "}
              {isAdmin?.admin
                ? "Admin"
                : isInstructor?.instructor
                ? "Instructor"
                : "User"}
            </MenuItem>
          </Menu>
        </li>
      ) : (
        <Link to="/login">
          <BtnOutline text="Login"></BtnOutline>
        </Link>
      )}
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
          className={`flex flex-col lg:hidden h-screen z-30 py-10 absolute top-[80px] dark:bg-[#0b111e] bg-white w-[280px] transition-all duration-300 ease-in-out left-0 ${
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
          {user && (
            <li>
              <Link
                to={
                  isAdmin?.admin
                    ? "/dashboard/manageUsers"
                    : isInstructor?.instructor
                    ? "/dashboard/myClasses"
                    : "/dashboard/selectedClasses"
                }
              >
                Dashboard
              </Link>
            </li>
          )}
          {user && !isAdmin?.admin && !isInstructor?.instructor && (
            <li>
              <Link to="/dashboard/selectedClasses">
                <IconButton aria-label="cart">
                  <Badge badgeContent={myClasses?.length} color="secondary">
                    <AiOutlineShoppingCart className="dark:text-white text-xl" />
                  </Badge>
                </IconButton>
              </Link>
            </li>
          )}
          {user ? (
            <li>
              <Menu
                menuButton={
                  <MenuButton>
                    <Tooltip title={user?.displayName}>
                      <Avatar
                        className="dark:border-2 border-green-400"
                        src={user?.photoURL}
                      />
                    </Tooltip>
                  </MenuButton>
                }
                transition
              >
                <MenuItem
                  className="font-poppins text-sm"
                  onClick={handleLogOut}
                >
                  <MdLogout className="mr-5"></MdLogout> Logout
                </MenuItem>
                <MenuItem disabled className="text-sm">
                  <AiOutlineUser className="mr-5"></AiOutlineUser>{" "}
                  {isAdmin?.admin
                    ? "Admin"
                    : isInstructor?.instructor
                    ? "Instructor"
                    : "User"}
                </MenuItem>
              </Menu>
            </li>
          ) : (
            <Link to="/login">
              <BtnOutline text="Login"></BtnOutline>
            </Link>
          )}
        </ul>

        <div>
          <DarkMode></DarkMode>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
