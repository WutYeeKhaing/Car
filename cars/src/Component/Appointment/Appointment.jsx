import React, { useState } from 'react';
import './Appointment.css'
const Appointment = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to backend)
    alert(`Appointment booked for ${form.name} on ${form.date} at ${form.time}`);
  };

  return (
    <div className='home'>
    <div className="appointment-form">
      <h1>Book a Test Drive</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
    </div>
  );
};

export default Appointment;
