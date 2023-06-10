import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";
import LazyLoad from "react-lazy-load";

const SingleClass = ({ item }) => {
  const { name, image, instructor, enrolled, availableSeats, price } = item;

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar src={instructor} aria-label="recipe">
              R
            </Avatar>
          }
          title={instructor}
          subheader="September 14, 2016"
        />
        <LazyLoad>
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
        </LazyLoad>

        <CardContent>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-poppins font-medium mb-3">{name}</h3>
              <p className="font-poppins text-sm">Price: ${price}</p>
              <p className="font-poppins text-sm">Enrolled: {enrolled}</p>
              <p className="font-poppins text-sm">
                AvailableSeats: {availableSeats}
              </p>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleClass;
