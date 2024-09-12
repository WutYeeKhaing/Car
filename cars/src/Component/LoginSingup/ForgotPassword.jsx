import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle password reset request goes here (e.g., API call)
    alert(`Password reset link sent to ${email}`);
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
      </form>
    </div>
  );
};

export default ForgetPassword;
