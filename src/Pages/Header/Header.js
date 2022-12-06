import React, { useContext } from 'react';
import logo from '../../Assets/favicon.ico.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user ,SignOut} =useContext(AuthContext)
    const handlelogout =() =>{
        SignOut()
        .then(()=>{})
        .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/dashboard'><li><a>DashBoard</a></li></Link>
                        <Link to='/blog'><li><a>Blog</a></li></Link>

                    </ul>
                </div>
                <img className='h-12 rounded-xl object-cover' src={logo} alt="" />
                <Link className="btn btn-ghost normal-case text-xl">Bike-Reseller</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <Link to='/'><li><a>Home</a></li></Link>
                <Link to='/dashboard'><li><a>DashBoard</a></li></Link>
                <Link to='/blog'><li><a>Blog</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid?
                    <Link onClick={handlelogout} className="btn"> logout</Link>
                    :
                    <Link to='/login' className="btn"> login</Link>
                }
            </div>
        </div>
    );
};

export default Header;