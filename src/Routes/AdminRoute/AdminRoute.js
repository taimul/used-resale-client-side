import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import Header from '../../Pages/Header/Header';
import Loading from '../../Pages/Loading/Loading';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Header to="/login" state={{ from: location }} replace></Header>
        
    
};

export default AdminRoute;