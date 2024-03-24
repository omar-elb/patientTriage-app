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
                name="user"
                // value={userDetails.email}
                // onChange={handleChange}
                placeholder="Username"
                required
            />
            <input
                type="text"
                name="name"
                // value={userDetails.email}
                // onChange={handleChange}
                placeholder="Full Name"
                required
            />
            <label htmlFor="date">Date of birth:
                <input
                    type="date"
                    name="date"
                    // value={userDetails.email}
                    // onChange={handleChange}
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
                // value={userDetails.email}
                // onChange={handleChange}
                placeholder="Phone number"
                required
            />
            <input
                type="email"
                name="email"
                // value={userDetails.email}
                // onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="password"
                // value={userDetails.password}
                // onChange={handleChange}
                placeholder="Password"
                required
            />
            <button type="submit">Registre</button>
        </form>
    );
}

export default Registre;
