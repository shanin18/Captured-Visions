import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../components/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }

    return <Navigate state={{from : location}} to="/login" replace></Navigate>
};

export default PrivateRoute;