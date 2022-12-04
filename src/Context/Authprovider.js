import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from './firebase.config';



export const authContex = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const authInfo = { user }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;