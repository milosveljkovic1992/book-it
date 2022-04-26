import React, { useContext, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

import { SignupForm } from './signup-form';
import { AuthContext } from '../../context';


const initialState = {
    fullName: '',
    email: '',
    phoneNumber: ''
};

// Divide database on user and another for appointments for that user

export const SignupContainer = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [senderInfo, setSenderInfo] = useState({ ...initialState });
    const [password, setPassword] = useState('');
    
    const usersCollectionRef = collection(db, 'users');
    const createUser = async () => {
        await addDoc(usersCollectionRef, senderInfo);
    };

    const auth = getAuth();

    const handleChange = (e) => {
        let info = { ...senderInfo };
        info[e.target.name] = e.target.value;
        setSenderInfo(info);
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, senderInfo.email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.displayName = senderInfo.fullName;
                user.phoneNumber = senderInfo.phoneNumber ? senderInfo.phoneNumber : null;
                setIsAuth(true);
                console.log(user);
                localStorage.setItem('isAuth', senderInfo.email);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
                // ..
            });
        createUser(senderInfo);
        setSenderInfo(initialState);
        setPassword('');
    };

    return (
        <SignupForm 
            handleSubmit={handleSubmit}
            senderInfo={senderInfo}
            handleChange={handleChange}
            password={password}
            setPassword={setPassword}
        />
    );
};