import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  AiOutlineFileSearch,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { MdOutlineAddToQueue, MdOutlinePayment, MdOutlinePendingActions } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BiEdit } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { Link, Outlet, useLocation } from "react-router-dom";
import image from "../assets/Images/logo/logo.png";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const drawerWidth = 260;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname.split("/")[2]);
  }, [location]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const drawer = (
    <div>
      <img src={image} className="w-28 m-3" />
      <Divider />

      {isAdmin?.admin ? (
        <List className="font-poppins">
          <Link
            to="/dashboard/manageClasses"
            className={isActive === "manageClasses" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <SiGoogleclassroom className="mr-10"></SiGoogleclassroom>
              Manage Classes
            </ListItemButton>
          </Link>

          <Link
            to="/dashboard/manageUsers"
            className={isActive === "manageUsers" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <FaUsers className="mr-10"></FaUsers>
              Manage Users
            </ListItemButton>
          </Link>
        </List>
      ) : isInstructor?.instructor ? (
        <List className="font-poppins">
          {location.pathname.split("/")[2] == "editAClass" && (
            <ListItemButton>
              <BiEdit className="mr-10 text-[#77bef8]"></BiEdit>
              <span className="text-[#77bef8]">Edit A Class</span>
            </ListItemButton>
          )}

          <Link
            to="/dashboard/addAClass"
            className={isActive === "addAClass" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <MdOutlineAddToQueue className="mr-10"></MdOutlineAddToQueue>
              Add A Class
            </ListItemButton>
          </Link>

          <Link
            to="/dashboard/myClasses"
            className={isActive === "myClasses" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <AiOutlineFileSearch className="mr-10"></AiOutlineFileSearch>
              My Classes
            </ListItemButton>
          </Link>
        </List>
      ) : (
        <List className="font-poppins">
          <Link
            to="/dashboard/selectedClasses"
            className={isActive === "selectedClasses" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <MdOutlinePendingActions className="mr-10"></MdOutlinePendingActions>
              Selected Classes
            </ListItemButton>
          </Link>

          <Link
            to="/dashboard/enrolledClasses"
            className={isActive === "enrolledClasses" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <GiConfirmed className="mr-10"></GiConfirmed>
              Enrolled Classes
            </ListItemButton>
          </Link>

          <Link
            to="/dashboard/paymentHistory"
            className={isActive === "paymentHistory" && "text-[#77bef8]"}
          >
            <ListItemButton>
              <MdOutlinePayment className="mr-10"></MdOutlinePayment>
              Payment History
            </ListItemButton>
          </Link>
        </List>
      )}
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />

      <List className="font-poppins">
        <Link to="/">
          <ListItemButton>
            <AiOutlineHome className="mr-10"></AiOutlineHome>
            Home
          </ListItemButton>
        </Link>

        <Link to="/instructors">
          <ListItemButton>
            <FaUserTie className="mr-10"></FaUserTie>
            Instructors
          </ListItemButton>
        </Link>

        <Link to="/classes">
          <ListItemButton>
            <SiGoogleclassroom className="mr-10"></SiGoogleclassroom>
            Classes
          </ListItemButton>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="flex justify-betwee ">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <AiOutlineMenu />
          </IconButton>
          <Typography noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div>
          <Outlet></Outlet>
        </div>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
