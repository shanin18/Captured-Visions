import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useMyClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const {refetch, data: myAddClasses = [] } = useQuery({
      queryKey: ["myAddClasses", user?.email],
      enabled: !loading,
      queryFn: () =>
        fetch(`https://captured-visions-server-shanin18.vercel.app/myClasses?email=${user?.email}`).then(
          (res) => res.json()
        ),
    });
    return [refetch, myAddClasses] ;
};

export default useMyClasses;