import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
  console.log(user);

  const url = `https://bike-resell-server-one.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
    return (
        <div>
      <h2 className="text-3xl mb-7">My Orders</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Products</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody className="mt-6">
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>
                  <figure>
                    <img src={booking.img} alt="" />
                  </figure>
                </td>
                <td>{booking.productName}</td>
                <td>{booking.price}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyOrders;