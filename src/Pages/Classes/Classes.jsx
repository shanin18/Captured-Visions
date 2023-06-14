import SectionTitle from "../../components/SectionTitle";
import SingleClass from "./SingleClass";
import useTitle from "../../Hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
const Classes = () => {
  useTitle("Classes");

  const { data: allClasses = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: () =>
      fetch("https://captured-visions-server-shanin18.vercel.app/allClasses").then((res) => res.json()),
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
