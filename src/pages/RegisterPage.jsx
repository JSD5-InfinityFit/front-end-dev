import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';



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
        <main className='center'>
            <section>
                <div>
                    <div className='card'>
                        <h1> Register </h1>
                        <form >
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>

                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login" >
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>

     )
}
	
export default RegisterPage;