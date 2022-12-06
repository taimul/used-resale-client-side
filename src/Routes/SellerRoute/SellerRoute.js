import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useSeller from '../../Hooks/useSeller';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import Header from '../../Pages/Header/Header';
import Loading from '../../Pages/Loading/Loading';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;
    }

    return <Header to="/login" state={{ from: location }} replace></Header>;
};

export default SellerRoute;