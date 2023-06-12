import SectionTitle from "../../components/SectionTitle";
import SingleClass from "./SingleClass";
import useAllClasses from "../../Hooks/useAllClasses";

const Classes = () => {
  const allClasses = useAllClasses();

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
