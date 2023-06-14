import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const usePayments = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: paymentsData = [] } = useQuery({
    queryKey: ["myEnrolledClasses"],
    enabled: !loading,
    queryFn: () =>
      fetch(`https://captured-visions-server-shanin18.vercel.app/payments?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });
  return paymentsData;
  console.log(paymentsData)
};

export default usePayments;
