import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: () =>
      fetch(`https://captured-visions-server-shanin18.vercel.app/users/admin/${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      }).then((res) => res.json()),
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
