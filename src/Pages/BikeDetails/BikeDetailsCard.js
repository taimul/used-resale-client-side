import React from 'react';

const BikeDetailsCard = ({ bikes, setSingleBike }) => {
    console.log(setSingleBike);
    const { category_name,
        title,
        resell_price,
        original_price,
        image_url,
        description,
        seller_name,
        condition,
        used } = bikes;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl ">
            <figure>
                <img className="h-72 object-cover " src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{category_name}</h2>
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{condition}</h2>
                </div>
                <div className=" mt-5 flex justify-between">

                    <div>
                        <p className="border-2 rounded-2xl p-2 bg-orange-500 text-white">
                            {" "}
                            Used: {used}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between gap-3">
                    <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-orange-500">
                        orginal price: {original_price}
                    </p>
                    <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-orange-500">
                        resale price: {resell_price}
                    </p>
                </div>
                <div className="flex justify-between gap-5 mt-3">
                    <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-slate-900">
                        Seller: {seller_name}
                    </p>
                    <p>{description}</p>
                </div>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setSingleBike(bikes)}
                    >Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default BikeDetailsCard;