import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: () =>
      fetch(`https://captured-visions-server-shanin18.vercel.app/users/instructor/${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      }).then((res) => res.json()),
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
