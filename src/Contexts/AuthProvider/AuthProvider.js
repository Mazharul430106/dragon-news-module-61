import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from 'firebase/auth';
import app from '../../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logoutUser = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, CurrentUser =>{
            console.log('CurrentUser', CurrentUser);
            setUser(CurrentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, loginUser, logoutUser, providerLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;