import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const usePayments = () => {
  const { loading } = useContext(AuthContext);

  const { data: paymentsData = [] } = useQuery({
    queryKey: ["myEnrolledClasses"],
    enabled: !loading,
    queryFn: () =>
      fetch(
        "https://captured-visions-server-shanin18.vercel.app/payments"
      ).then((res) => res.json()),
  });
  return paymentsData;
};

export default usePayments;
