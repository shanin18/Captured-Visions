import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import SelectedClasses from "../Pages/SelectedClasses/SelectedClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

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
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "addAClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "MyClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "selectedClasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
