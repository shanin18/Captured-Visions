import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);
  const [instructorInfo, setInstructorInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allInstructors")
      .then((res) => res.json())
      .then((data) => setAllInstructors(data));
  }, []);

  const handleOpen = (id, setOpen) => {
    setOpen(true);
    const instructor = allInstructors?.find((person) => person._id === id);
    setInstructorInfo(instructor);
  };

  return (
    <div className="container mx-auto py-16">
      <SectionTitle title="meet our instructors"></SectionTitle>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-7 mx-2">
        {allInstructors?.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
            handleOpen={handleOpen}
            instructorInfo={instructorInfo}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
