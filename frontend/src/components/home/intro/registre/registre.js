import React, { useState } from 'react';
import './registre.css'


function Registre() {
    // const [userDetails, setUserDetails] = useState({
    //     email: '',
    //     password: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserDetails({
    //         ...userDetails,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('User Details:', userDetails);
    //     // Here you would usually send the details to the backend
    // };

    return (
        <form className="formm">
            <h2>Registre</h2>
            <input
                type="text"
                name="cin"
                placeholder="CIN"
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
            />
            <label htmlFor="date">Date of birth:
                <input
                    type="date"
                    name="date"
                    required
                />
            </label>
            <label htmlFor="type">Personnel type:
                <select name="type" id="type">
                    <option value="nurse">Nurse</option>
                    <option value="doctor">Doctor</option>
                </select>
            </label>
            <input
                type="tel"
                name="tel"
                placeholder="Phone number"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
            />
            <button type="submit">Registre</button>
        </form>
    );
}

export default Registre;
