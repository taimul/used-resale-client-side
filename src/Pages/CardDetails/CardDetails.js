import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({service}) => {
    const { name, image } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
                <figure><img className="h-72 object-cover" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/bikes/${name}`}><button className="btn btn-primary">more</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;