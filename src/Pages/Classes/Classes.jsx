import SectionTitle from "../../components/SectionTitle";
import SingleClass from "./SingleClass";
import useTitle from "../../Hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
const Classes = () => {
  useTitle("Classes");
  const { loading } = useContext(AuthContext);

  const { data: allClasses = [] } = useQuery({
    queryKey: ["allClasses"],
    enabled: !loading,
    queryFn: () =>
      fetch("http://localhost:5000/allClasses").then((res) => res.json()),
  });

  return (
    <div className="container mx-auto py-20">
      <SectionTitle title="All Classes"></SectionTitle>
      <div className="flex flex-wrap justify-center gap-5 mx-2">
        {allClasses?.map((item) => (
          <SingleClass key={item._id} item={item}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
