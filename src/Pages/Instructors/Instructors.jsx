import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleInstructor from "./SingleInstructor";
import useTitle from "../../Hooks/useTitle";
const Instructors = () => {
  useTitle("Instructors");

  const [allInstructors, setAllInstructors] = useState([]);
  const [instructorInfo, setInstructorInfo] = useState([]);

  useEffect(() => {
    fetch("https://captured-visions-server-shanin18.vercel.app/allInstructors")
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
      });
  }, []);

  const handleOpen = (id, setOpen) => {
    setOpen(true);
    const instructor = allInstructors?.find((person) => person._id === id);
    setInstructorInfo(instructor);
  };

  return (
    <div className="container mx-auto py-16">
      <SectionTitle title="meet our instructors"></SectionTitle>
      <div className="flex flex-wrap justify-center gap-5 mx-2">
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
