import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  return [refetch, myClasses];
};

export default useMyClasses;
