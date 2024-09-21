import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage(`Password reset link sent to ${email}`);
    } else {
      setMessage('Email not found. Please sign up first.');
    }
  };

  return (
    <div className="wrapper">
      <form className="loginContainer" onSubmit={handleSubmit}>
        <h1 className="head">Forgot Password</h1>
        <p>Enter your email to reset your password:</p>
        <div className="input-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>

        {/* Message after submission */}
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default ForgetPassword;
