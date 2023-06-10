import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import SinglePopularClass from "./SinglePopularClass";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  return (
    <div className="container mx-auto">
      <SectionTitle title="Popular classes"></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularClasses?.map((popularClass) => (
          <SinglePopularClass
            key={popularClass._id}
            popularClass={popularClass}
          ></SinglePopularClass>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
