import React, { createContext, useState,useEffect } from 'react';
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,signInWithPopup,updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.config';


export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const providerLogin=(provider)=>{
        return signInWithPopup(auth,provider);
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscriber=onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            setLoading(false);
    
    
           });
           return ()=>{
             unsubscriber();
           }
            
    },[])
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);
    }
    const SignOut=()=>{
       
        setLoading(true);
        return signOut(auth);
    }
    const authinfo={
       user,
       loading,
       createUser,
       loginUser,
       SignOut,
       updateUserProfile,
       setLoading,
       providerLogin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;