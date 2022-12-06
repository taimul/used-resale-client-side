import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser,updateUserProfile,setCreatedUserEmail,setLoading}=useContext(AuthContext);
    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const role= form.role.value;
        console.log(name,email,password,role);
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUserUpdateProfile(name);
            saveUser(name,email,role);
            // alert('Registration Successfull!');
            setLoading(false);
            // window.location.href = '/';

            // navigate('/');
            
        })
        .catch(error => {
            setError(error.message)
          
        })
        .finally(() => {
            setLoading(false);
        })

    const handleUserUpdateProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const saveUser = (name, email, role ) => {
        const user = { name, email, role };
    
        fetch("https://bike-resell-server-one.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <select name='role' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select One</option>
                                <option value='buyer'>Buyer</option>
                                <option value='seller'>Seller</option>
                            </select>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <h6 className='text-center mt-5 mb-5'>Already have an account? <Link to='/login' className='text-accent font-bold'>login</Link></h6>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;