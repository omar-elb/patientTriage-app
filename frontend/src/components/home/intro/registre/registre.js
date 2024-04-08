import React, { useState } from 'react';
import './registre.css'


function Registre() {

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
            <label htmlFor="service">Service:
                <select name="service" id="service">
                    <option value="1">Emergency Services</option>
                    <option value="2">Inpatient Services</option>
                    <option value="3">Outpatient Services</option>
                    <option value="4">Surgical Services</option>
                    <option value="5">Diagnostic Services</option>
                    <option value="6">Maternity and Newborn Services</option>
                    <option value="7">Pediatric Services</option>
                    <option value="8">Intensive Care Units</option>
                    <option value="9">Pharmacy</option>
                    <option value="10">Rehabilitation Services</option>
                    <option value="11">Oncology Services</option>
                    <option value="12">Cardiology Services</option>
                    <option value="13">Mental Health and Psychiatry Services</option>
                    <option value="14">Geriatric Services</option>
                    <option value="15">Palliative and Hospice Care</option>
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
