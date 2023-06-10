import React, { useContext } from "react";
import google from "../../assets/Images/socials/google.png";
import { AuthContext } from "../../Context/AuthProvider";
const LoginWithSocials = () => {

  const {googleLogin} = useContext(AuthContext);

  const handleLogin = () =>{
    googleLogin()
    .then(()=>{})
    .catch(err => console.log(err.message))
  }

  return (
    <div className="flex justify-center mt-5">
      <button onClick={handleLogin} className="shadow-xl dark:shadow-[#77bef8] dark:shadow w-9 h-9 p-2 rounded-full cursor-pointer">
        <img src={google} className="w-full" alt="icon" />
      </button>
    </div>
  );
};

export default LoginWithSocials;
