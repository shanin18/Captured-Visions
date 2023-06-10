import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors"
import Classes from "../Pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"instructors",
        element: <Instructors></Instructors>,
      },
      {
        path:"classes",
        element: <Classes></Classes>,
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      }
    ],
  },
]);

export default router;
