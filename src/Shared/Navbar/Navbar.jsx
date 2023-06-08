import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo/logo.png";
import { useEffect, useState } from "react";
import DarkMode from "../../components/DarkMode/DarkMode";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const [shadow, setShadow] = useState(false);

  const navItems = (
    <ul
      className={`${
        shadow && "text-white"
      } flex item-center gap-8 font-poppins dark:text-white`}
    >
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
      <li onClick={() => setIsActive("profile")}>
        <Link
          to="/profile"
          className={isActive === "profile" && "text-[#77bef8]"}
        >
          User profile
        </Link>
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
      } z-40 dark:bg-[#0b111e] backdrop-blur-md py-4 px-8 transition-all duration-300 ease-in-out`}
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
