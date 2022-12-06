import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import PopupModal from '../../PopupModal/PopupModal';

const AllSeller = () => {
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('https://bike-resell-server-one.vercel.app/allusers?role=seller');
            const data = await res.json();
            return data;
        }
    });

    const [deletingseller, setDeletingseller] = useState(null);
    const closeModal = () => {
        setDeletingseller(null);
    };

    const handleDeleteseller = user => {
        fetch(`https://bike-resell-server-one.vercel.app/seller/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`seller ${user.name} deleted successfully`)
                }

            })
    }
    return (
        <div>
            <h2 className="text-3xl">All seller</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allusers.map((seller, i) => (
                            <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>

                                <td>
                                    <label
                                        onClick={() => setDeletingseller(seller)}
                                        htmlFor="confirmation-modal"
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {deletingseller && (
                <PopupModal
                    title={`Are you sure you want to delete`}
                    message={`If you Delete ${deletingseller.name}. it cannot be undone`}
                    successAction={handleDeleteseller}
                    successButtonName="Delete"
                    modalData={deletingseller}
                    closeModal={closeModal}
                ></PopupModal>
            )}
        </div>
    );
};

export default AllSeller;