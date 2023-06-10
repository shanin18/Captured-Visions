import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleClass from "./SingleClass";

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allClasses")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);

  console.log(allClasses);
  return (
    <div className="container mx-auto">
      <SectionTitle title="All Classes"></SectionTitle>
      <div className="flex flex-wrap justify-center gap-5">
        {
            allClasses?.map(item => <SingleClass key={item._id} item={item}></SingleClass>)
        }
      </div>
    </div>
  );
};

export default Classes;
