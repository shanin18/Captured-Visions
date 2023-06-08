import ToggleButton from "@mui/material/ToggleButton";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { DarkModeContext } from "../../Context/DarkModeProvider";
const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <ToggleButton value="check" selected={darkMode} onChange={toggleDarkMode}>
        {darkMode ? (
          <FiMoon
            className={`text-lg ${
              darkMode ? "text-white" : "text-gray-700"
            }  hover:text-[#77bef8]`}
          ></FiMoon>
        ) : (
          <FiSun
            className={`text-lg ${
              darkMode ? "text-white" : "text-gray-700"
            }  hover:text-[#77bef8]`}
          ></FiSun>
        )}
      </ToggleButton>
    </div>
  );
};

export default DarkMode;
