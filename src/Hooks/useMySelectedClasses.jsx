import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMySelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: mySelectedClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled:!loading,
    queryFn: () =>
      fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      }).then((res) => res.json()),
  });

  return [refetch, mySelectedClasses];
};

export default useMySelectedClasses;
