import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingDetails from '../BookingDetails/BookingDetails';
import BikeDetailsCard from './BikeDetailsCard';

const BikesDetails = () => {
    const bike = useLoaderData();
    const [singleBike, setSingleBike] = useState(null);
    return (
        <div>
            <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    bike.map(bikes => <BikeDetailsCard
                        key={bikes.id}
                        bikes={bikes}
                        setSingleBike={setSingleBike}
                    ></BikeDetailsCard>)
                }
                {singleBike &&
                    <BookingDetails
                        singleBike={singleBike}
                        setSingleBike={setSingleBike}
                    ></BookingDetails>
                }
            </div>
        </div>
    );
};

export default BikesDetails;