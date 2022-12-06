import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const BookingDetails = ({ singleBike, setSingleBikes }) => {
    // console.log(bikes);
    const { image_url, resell_price, seller_name } = singleBike;
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const productName = form.productName.value;
        const price = form.price.value;

        const booking = {
            name,
            productName,
            email,
            phone,
            location,
            price,
        }
        fetch('https://bike-resell-server-one.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setSingleBikes(null);
                    toast.success('Booking confirm');
                }
            })
    }
    return (
        
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-2xl font-bold text-center text-green-500">{seller_name}</h3>
                        <form onSubmit={handleBooking} className=" grid grid-cols-1 gap-2 mt-10">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    disabled
                                    defaultValue={user?.email}
                                    type="email"
                                    name="email"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input
                                    disabled
                                    defaultValue={user?.displayName}
                                    type="text"
                                    name="name"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    name="productName"
                                    value={seller_name}
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    name="price"
                                    value={resell_price}
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="phone number"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </div>


                            <br />
                            <input
                                className="btn btn-accent w-full"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </>
        
    );
};

export default BookingDetails;