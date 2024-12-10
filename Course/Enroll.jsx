import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Enroll.css'; // Import CSS for the enroll page

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'data-science',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="enroll-container">
      <h2>Enrollment Form</h2>
      <form className="enroll-form">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course:
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="data-science">Data Science</option>
            {/* Add more courses as needed */}
          </select>
        </label>
        <Link to="/DS">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Enroll;
