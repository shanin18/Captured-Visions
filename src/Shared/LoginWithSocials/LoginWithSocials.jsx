import React from "react";
import google from "../../assets/Images/socials/google.png";
const LoginWithSocials = () => {
  return (
    <div className="flex justify-center mt-5">
      <button className="shadow-xl dark:shadow-[#77bef8] dark:shadow w-9 h-9 p-2 rounded-full cursor-pointer">
        <img src={google} className="w-full" alt="icon" />
      </button>
    </div>
  );
};

export default LoginWithSocials;
