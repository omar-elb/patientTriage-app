import React from 'react'
import './doctorProfile.css'

function DoctorProfile() {
  return (
    <div>
      <h2 id='profile2'>Profile</h2>

      <form className="doctorProfile">
        <input
          type="text"
          name="user"
          placeholder="Username"
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

export default DoctorProfile