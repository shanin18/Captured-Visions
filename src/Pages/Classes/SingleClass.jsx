import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useMyClasses from "../../Hooks/useMYClasses";

const SingleClass = ({ item }) => {
  const [fold, setFold] = useState(false);
  const { name, image, instructor, enrolled, availableSeats, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [refetch] = useMyClasses();


  const cardStyle = {
    maxWidth: 345,
    backgroundColor: availableSeats == 0 ? " #ff4c48" : "",
  };

  const handleSelectClass = () => {

    if (user && user.email) {
      const selectedItem = {
        name,
        image,
        instructor,
        price,
        email: user.email,
      };
      axios
        .post("http://localhost:5000/selectedClasses", selectedItem)
        .then((data) => {
          if (data.data.insertedId) {
            refetch()
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Class has been selected successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div data-aos="fade-up">
      <Card sx={cardStyle}>
        <CardHeader
          avatar={<Avatar src={image} aria-label="recipe"></Avatar>}
          title={
            <Typography style={{ fontFamily: "poppins" }}>
              {instructor}
            </Typography>
          }
        />
        <LazyLoad>
          <CardMedia
            component="img"
            className="h-[230px]"
            image={image}
            alt="Course Image"
          />
        </LazyLoad>

        <CardContent>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <div className="mb-3">
                {!fold ? (
                  <h3 className="text-xl font-poppins font-medium">
                    {name.slice(0, 30)}
                    <button
                      className="text-sm duration-300"
                      onClick={() => setFold(!fold)}
                    >
                      ...See more
                    </button>
                  </h3>
                ) : (
                  <h3 className="text-xl font-poppins font-medium">
                    {name}
                    <button
                      className="text-sm duration-300"
                      onClick={() => setFold(!fold)}
                    >
                      ...See less
                    </button>
                  </h3>
                )}
              </div>
              <p className="font-poppins text-sm">Price: ${price}</p>
              <p className="font-poppins text-sm">Enrolled: {enrolled}</p>
              <p className="font-poppins text-sm">
                AvailableSeats: {availableSeats}
              </p>
            </div>
            <div>
              <Button
                onClick={handleSelectClass}
                disabled={availableSeats == 0 && true}
                variant="contained"
                style={{ fontFamily: "Poppins", background: "#77bef8" }}
              >
                Select to enroll
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleClass;
