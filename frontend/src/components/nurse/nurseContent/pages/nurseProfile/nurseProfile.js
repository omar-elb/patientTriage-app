import React from 'react'
import './nurseProfile.css'

function NurseProfile() {
    return (
        <div>
            <h2 id='profile1'>Profile</h2>

            <form className="nurseProfile">
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
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default NurseProfile