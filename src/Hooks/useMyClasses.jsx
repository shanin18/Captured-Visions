import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: myAddClasses = [] } = useQuery(
    ["myAddClasses", user?.email],
    () =>
      fetch(
        `https://captured-visions-server-shanin18.vercel.app/myClasses?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      ).then((res) => res.json())
  );
  return [refetch, myAddClasses];
};

export default useMyClasses;
