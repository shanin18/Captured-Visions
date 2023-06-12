import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useAllClasses = () => {
  const { loading } = useContext(AuthContext);
  
  const { data: allClasses = [] } = useQuery({
    queryKey: ["allClasses"],
    enabled: !loading,
    queryFn: () =>
      fetch("http://localhost:5000/allClasses").then((res) => res.json()),
  });
  return allClasses;
};

export default useAllClasses;
