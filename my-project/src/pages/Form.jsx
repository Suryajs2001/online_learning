import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    lookingFor: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Book Your Seat For Upcoming Courses</h2>
      <p>
        To book your seat please fill out this form. Any confusion regarding the
        selection of courses fill this form our team will get back to you within
        24 Hrs. Any Query write us - info@lternative.in
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tell Us Your Name *</label>
          <div className="name-group">
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Tell Us Your Phone Number *</label>
          <div className="phone-group">
            <select name="countryCode" className="country-code">
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Tell Us Your Email Id *</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Looking For</label>
          <select
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={handleChange}
          />
          <div className="location-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">State/Region/Province</option>
              {/* Add state options */}
            </select>
            <input
              type="text"
              name="postalCode"
              placeholder="Postal / Zip Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Country</option>
              {/* Add country options */}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Let Us Know If You Have Any Query?</label>
          <textarea
            name="query"
            placeholder="Your query"
            value={formData.query}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
