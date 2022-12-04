import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../Context/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const Authfile = ({ children }) => {
    const [user, setUser] = useState(null)

    const createEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  verifiemail

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    //  sigin in 
    const signIn = (email, password) => {

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
        });

        return () => {
            unsubscribe();
        }

    }, [])
    // console.log(user);
    const authInfo = { user, createEmail, verifyEmail, signIn, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authfile;