import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
        <div className="d-flex items-center justify-center vh-100 card mt-10" style={{backgroundColor:'#1E2F50',color:'white'}}>
         <div className="text-center">
             <h1 className="display-1 fw-bold">404</h1>
             <p className=""> <span className="text-danger">Opps!</span> Page not found.</p>
             <p className="lead">
                 The page you’re looking for doesn’t exist.
               </p>
             <Link to="/" className="btn btn-primary">Go Home</Link>
         </div>
     </div>
     </div>
    );
};

export default Error;