import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import { Link } from "react-router-dom";

import google from "../../assets/Images/socials/google.png";

const Login = () => {
  const [hidden, setHidden] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div div className="container mx-auto flex justify-center py-24">
      <div className="border dark:border-none p-10 dark:bg-[#0c0c0c] rounded-xl">
        <h2 className="font-poppins text-3xl font-semibold text-center dark:text-white mb-10">
          Login
        </h2>
        <form className="w-[400px] mb-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5 text-white">
            <div className="flex bg-[#171719] dark:border-[#77bef8] border rounded-md">
              <div className="w-12 h-12 rounded-l-md flex items-center justify-center">
                <BsEnvelopeAt className="text-lg"></BsEnvelopeAt>
              </div>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                type="email"
                className="w-full flex-1 pr-3 py-2 bg-transparent focus:outline-none font-poppins text-sm"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <small className="text-red-600 font-poppins">
                This field is required
              </small>
            )}

            <div className="flex relative bg-[#171719] dark:border-[#77bef8] border rounded-md">
              <div className="w-12 h-12 rounded-l-md flex items-center justify-center">
                <AiOutlineLock className="text-lg"></AiOutlineLock>
              </div>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type={!hidden && "password"}
                className="w-full flex-1 pr-8 py-2 bg-transparent focus:outline-none font-poppins text-sm"
                {...register("password", { required: true })}
              />

              <div
                className="absolute  right-2 top-3"
                onClick={() => setHidden(!hidden)}
              >
                {!hidden ? (
                  <AiOutlineEye className="text-xl cursor-pointer"></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible className="text-xl cursor-pointer"></AiOutlineEyeInvisible>
                )}
              </div>
            </div>

            {/* errors will return when field validation fails  */}
            {errors.password && (
              <small className="text-red-600 font-poppins text-xs">
                This field is required!
              </small>
            )}

            <input
              variant="contained"
              className="w-full py-3 rounded-md hover:bg-[#55b3ff] bg-[#77bef8] font-poppins cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <small className="font-poppins dark:text-white">
          New here?
          <Link to="/signUp">
            <span className="hover:underline ml-1 hover:text-[#77bef8]">
              Create an account
            </span>
          </Link>
        </small>
        <div className="flex items-center my-3">
          <div className="w-full border-b "></div>
          <p className="px-3 font-poppins text-sm dark:text-white">OR</p>
          <div className="w-full border-b "></div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="shadow-xl dark:shadow-[#77bef8] dark:shadow w-9 h-9 p-2 rounded-full cursor-pointer">
            <img src={google} className="w-full" alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
