import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import BikesDetails from "../Pages/BikeDetails/BikesDetails";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>

            },
            {
                path: '/bikes/:name',
                element: <BikesDetails></BikesDetails>,
                loader: ({params}) => fetch(`https://bike-resell-server-one.vercel.app/bikes/${params.name}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        // errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard/myorders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
        
            {
                path:'/dashboard/addproducts',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            // {
            //     path:'/dashboard/payment/:id',
            //     element:<Payment></Payment>,
            //     loader: ({params}) => fetch(`https://bike-resell-server-one.vercel.app/bookings/${params.id}`)
                
            // }

        ]
    },
    {path:'*',element:<Error></Error>}, 

])
export default router;