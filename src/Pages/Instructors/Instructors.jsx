import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allInstructors")
      .then((res) => res.json())
      .then((data) => setAllInstructors(data));
  }, []);
  console.log(allInstructors);

  return (
    <div className="container mx-auto py-16">
      <SectionTitle title="meet our instructors"></SectionTitle>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-7">
        {allInstructors?.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
