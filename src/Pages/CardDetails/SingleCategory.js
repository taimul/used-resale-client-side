import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';

const SingleCategory = () => {

    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('https://bike-resell-server-one.vercel.app/categoriesData')
    //         .then(res => res.json())
    //         .then(data => setServices(data))

    // }, [])
    const {data:categoriesData =[]} = useQuery({
        queryKey: ['categoriesData'],
        queryFn: () => fetch('https://bike-resell-server-one.vercel.app/categoriesData')
        .then(res => res.json())
    })
    return (
        <div  className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoriesData.map(service => <CardDetails key={service.id} 
                service={service}
                ></CardDetails>)
               
            }
        </div>
    );
};

export default SingleCategory;