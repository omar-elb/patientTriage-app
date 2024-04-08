import React, { useState } from 'react';
import './signin.css'

function Signin() {
    // const [loginDetails, setLoginDetails] = useState({
    //     email: '',
    //     password: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setLoginDetails({
    //         ...loginDetails,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Login Details:', loginDetails);
    //     // Here you would usually verify the details against the backend
    // };

    return (
        <form className="auth-form">
            <h2 >Sign In</h2>
            <input
                type="text"
                name="cin"
                // value={loginDetails.email}
                // onChange={handleChange}
                placeholder="CIN"
                required
            />
            <input
                type="password"
                name="password"
                // value={loginDetails.password}
                // onChange={handleChange}
                placeholder="Password"
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default Signin;
