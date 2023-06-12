import React, { useEffect, useState } from "react";
import SingleInstructorCard from "./SinglePopularInstructor";
import SectionTitle from "../../../components/SectionTitle";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularInstructors")
      .then((res) => res.json())
      .then((data) => setPopularInstructors(data));
  }, []);
  return (
    <div className="container mx-auto overflow-hidden">
      <SectionTitle title="Popular Instructors"></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {popularInstructors?.map((popularInstructor) => (
          <SingleInstructorCard
            key={popularInstructor._id}
            popularInstructor={popularInstructor}
          ></SingleInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
