import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import PopupModal from '../../PopupModal/PopupModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

  const handleDeleteUser = user =>{
    fetch(`https://bike-resell-server-one.vercel.app/users/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {

          if(data.deletedCount > 0){
            // refetch();
            toast.success(`User ${user.name} deleted successfully`)
        }
          
        })
  }

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://bike-resell-server-one.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });


    return (
        <div>
      <h2 className="text-3xl">All Users</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
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
      {deletingUser && (
        <PopupModal
          title={`Are you sure you want to delete`}
          message={`If you Delete ${deletingUser.name}. it cannot be undone`}
          successAction = {handleDeleteUser}
          successButtonName="Delete"
          modalData = {deletingUser}
          closeModal={closeModal}
        ></PopupModal>
      )}
    </div>
    );
};

export default AllUsers;