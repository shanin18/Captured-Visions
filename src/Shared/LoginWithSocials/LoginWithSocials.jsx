import React, { useContext } from "react";
import google from "../../assets/Images/socials/google.png";
import { AuthContext } from "../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const LoginWithSocials = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        const savedUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Account created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={handleLogin}
        className="shadow-xl dark:shadow-[#77bef8] dark:shadow w-9 h-9 p-2 rounded-full cursor-pointer"
      >
        <img src={google} className="w-full" alt="icon" />
      </button>
    </div>
  );
};

export default LoginWithSocials;
