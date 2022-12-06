import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';
import Header from '../Pages/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
    return (
        <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content"> 
             {isSeller && (
                <>
                 <li>
                  <Link to="/dashboard/addproducts">Add Product</Link>
                </li>
                </>
              )
             }
                {
                  isBuyer &&<>
                  <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                
                  </>
                }
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;