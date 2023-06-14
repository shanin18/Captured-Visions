import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithSocials from "../../Shared/LoginWithSocials/LoginWithSocials";
import { useContext, useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const [hidden, setHidden] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const { loginUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    setError("");
    loginUser(data.email, data.password)
      .then((res) => {
        navigate(from, {replace:true})
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div div className="container flex mx-auto justify-center pt-24 pb-40">
      <div className="border md:min-w-[450px] dark:border-none p-5 md:p-10 dark:bg-[#0c0c0c] rounded-xl">
        <h2 className="font-poppins text-3xl font-semibold text-center dark:text-white mb-10">
          Login
        </h2>

        <form className="mb-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5 dark:text-white">
            {/* email field */}
            <div className="flex dark:bg-[#171719] dark:border-[#77bef8] border rounded-md">
              <div className="w-12 h-12 rounded-l-md flex items-center justify-center">
                <BsEnvelopeAt className="text-lg"></BsEnvelopeAt>
              </div>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 pr-3 py-2 bg-transparent focus:outline-none font-poppins text-sm"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <small className="text-red-600 font-poppins">
                Email is required
              </small>
            )}

            {/* password field */}
            <div className="flex relative dark:bg-[#171719] dark:border-[#77bef8] border rounded-md">
              <div className="w-12 h-12 rounded-l-md flex items-center justify-center">
                <AiOutlineLock className="text-lg"></AiOutlineLock>
              </div>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type={!hidden && "password"}
                placeholder="Enter your password"
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
            {errors.password ? (
              <small className="text-red-600 font-poppins text-xs">
                Password is required!
              </small>
            ) : (
              <small className="text-red-600 font-poppins text-xs">
                {error}
              </small>
            )}

            <input
              variant="contained"
              className="w-full py-3 rounded-md hover:bg-[#55b3ff] bg-[#77bef8] font-poppins cursor-pointer text-sm"
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

        <LoginWithSocials></LoginWithSocials>
      </div>
    </div>
  );
};

export default Login;
