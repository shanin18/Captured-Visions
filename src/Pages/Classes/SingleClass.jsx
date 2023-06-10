import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

const SingleClass = ({ item }) => {
  const [fold, setFold] = useState(false);
  const { name, image, instructor, enrolled, availableSeats, price } = item;

  const cardStyle = {
    maxWidth: 345,
    backgroundColor: availableSeats == 0 ? " #ff4c48" : "",
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
              <Button disabled={availableSeats == 0 && true} variant="contained" style={{fontFamily:"Poppins", background:"#77bef8"}}>Select to Enroll</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleClass;
