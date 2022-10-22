import React, { createContext, useEffect, useState } from 'react';
import {
        createUserWithEmailAndPassword,
        getAuth, onAuthStateChanged, 
        signInWithEmailAndPassword, 
        signInWithPopup, signOut, 
        updateProfile,
    } from 'firebase/auth';
import app from '../../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logoutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, CurrentUser =>{
            console.log('CurrentUser', CurrentUser);
            setUser(CurrentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user, loading, createUser, loginUser, logoutUser, providerLogin, updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;