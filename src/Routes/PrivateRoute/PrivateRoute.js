import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import Header from '../../Pages/Header/Header';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user){
        return children;
    }

    return <Header to="/login" state={{from: location}} replace></Header>;
};

export default PrivateRoute;