import { useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../components/Spinner";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (loading || isInstructorLoading) {
    return <Spinner></Spinner>;
  }
  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
