import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    axios.post("http://localhost:5000/allClasses", { data }).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle title="Add A Class"></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border font-poppins flex flex-col gap-5 p-5 md:max-w-[600px] rounded"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2">
            <label className="font-medium dark:text-white">Class Name</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm mt-1"
              placeholder="Enter class name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <small className="text-xs text-red-600">
                This field is required
              </small>
            )}
          </div>
          <div className="md:w-1/2">
            <label className="font-medium dark:text-white">Class Image</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm mt-1"
              placeholder="Enter ImageURL"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <small className="text-xs text-red-600">
                This field is required
              </small>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2">
            <label className="font-medium dark:text-white">
              Instructor Name
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm mt-1"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Enter instructor name"
              {...register("instructor")}
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-medium dark:text-white">
              Instructor Email
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm mt-1"
              defaultValue={user?.email}
              readOnly
              placeholder="Enter instructor email"
              {...register("instructorEmail")}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2">
            <label className="font-medium dark:text-white">
              Available Seats
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm mt-1"
              placeholder="Enter available seats"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && (
              <small className="text-xs text-red-600">
                This field is required
              </small>
            )}
          </div>
          <div className="md:w-1/2">
            <label className="font-medium dark:text-white">Price</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm mt-1"
              placeholder="Enter price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <small className="text-xs text-red-600">
                This field is required
              </small>
            )}
          </div>
        </div>

        <input className="py-2 text-white bg-[#77bef8] rounded" type="submit" />
      </form>
    </div>
  );
};

export default AddAClass;
