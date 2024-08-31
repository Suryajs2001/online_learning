import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Make sure you have this file for styling
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', formData)
            .then(response => { 
                alert(response.data.message)
                 navigate('/profile' , { state:{
                    studentId:response.data.result.insertId
                 } })
            })
            .catch(error => alert('Error: ' + error.response.data.message));
    };
        const navigate=useNavigate();
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
                type="text"
                name="Name"
                placeholder="Name"
                value={formData.Name}
                onChange={handleChange}
                required
            />
           
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
           
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit"  >Register</button>
        </form>
    );
};

export default Signup;