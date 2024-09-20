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
  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const formattedDate = nextDate.toISOString().split('T')[0]; // format date as YYYY-MM-DD
      dates.push(formattedDate);
    }
    return dates;
  };
  const getAvailableTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      if (hour === 12) continue; // Exclude 12 PM
      const time = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      times.push(time);
    }
    return times;
  };

  return (
    <div className='home'>
    <div className="appointment-form">
      <h1>Book a Test Drive</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        {/* Date dropdown */}
        
          <select name="date" onChange={handleChange} value={form.date} required>
            <option value="">-- Select a Date --</option>
            {getNextWeekDates().map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          
          {/* Time dropdown */}

          <select name="time" onChange={handleChange} value={form.time} required>
            <option value="">-- Select a Time --</option>
            {getAvailableTimes().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
    </div>
  );
};

export default Appointment;
