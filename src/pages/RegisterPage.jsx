import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import inifityLogo from "../assets/icons/infinity.png";
import './RegisterPage.css'
import { colors } from '@mui/material';


function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                updateProfile(auth.currentUser, {
                    displayName: e.userName, photoURL: "https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                })
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    return (
        <main className='center-top pt-12'>
            <section className=''>
               
                    <div className='card'>
                        <div className='box-logo'>
                            <h1 ><img
                                src={inifityLogo}
                                className="h-12 "
                                alt="Infinity Fit Logo" />
                                INFINITY FIT </h1>
                        </div>
                        <form >
                            <div className='formtype pt-12'>
                                <label htmlFor="email-address">
                                    Email
                                </label> <br></br>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email"
                                />
                            </div>
                                
                            <div className='formtype'>
                                <label  htmlFor="password">
                                    Password
                                </label> <br></br>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div className='register-2'>
                                
                                    <button className='button-register' style={{backgroundColor:'#0353A4'}}
                                        type="submit"
                                        onClick={onSubmit}
                                    > Register </button>
                                
                            </div>
                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login" >
                                Sign in
                            </NavLink>
                        </p>
                    </div>
               
            </section >
        </main >

    )
}

export default RegisterPage;