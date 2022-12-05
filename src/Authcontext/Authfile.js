import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Context/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const Authfile = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  verifiemail

    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }
    //  sigin in 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('inside auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }

    }, [])
    //Register by Google
    const googleRegister = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //Sing Our
    const logOut = () => {
        return signOut(auth)
    }


    // console.log(user);
    const authInfo = { user, loading, createEmail, verifyEmail, signIn, updateUserProfile, googleRegister, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authfile;