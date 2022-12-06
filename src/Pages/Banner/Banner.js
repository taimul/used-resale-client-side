import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero h-[560px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">WELCOME</h1>
                    <p className="mb-5 text-xl">Working Bikes is a full service bike shop, providing community members and neighbors with affordable refurbished bicycles, accessories, and repair services. The funds raised by our retail store and service department support our nonprofit programs. These include our local donation programs, international donation program, and volunteer program.</p>
                    <Link to='/'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;