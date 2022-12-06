import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useBuyer from '../../../Hooks/useBuyer';
import { AuthContext } from '../../../Pages/AuthProvider/AuthProvider';
import Header from '../../../Pages/Header/Header';
import Loading from '../../../Pages/Loading/Loading';

const BuyerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();
    console.log(isBuyer, {user});

    if (loading || isBuyerLoading) {
        return <Loading></Loading>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Header to="/login" state={{ from: location }} replace></Header>;
};

export default BuyerRoute;