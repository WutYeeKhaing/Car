import React, { useState } from 'react';
import './LoginSingup.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaMailBulk } from 'react-icons/fa';

const LoginSingup = () => {
  // State to switch between Login and Sign Up
  const [isSignUp, setIsSignUp] = useState(false);

  // Toggle between Login and Sign Up modes
  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle Sign Up logic here
      console.log("Sign Up logic");
    } else {
      // Handle Login logic here
      console.log("Login logic");
    }
  };

  return (
    <div className='wrapper'>
      <form className='loginContainer' onSubmit={handleSubmit}>
        <h1 className='head'>{isSignUp ? 'Sign Up' : 'Login'}</h1>

        {/* Username Input */}
        <div className='input-box flex'>
          <input type='text' placeholder='Username' required />
          <FaUser className='icons' />
        </div>

        {/* Password Input */}
        <div className='input-box flex'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icons' />
        </div>

        {/* Email Input: Show only in Sign Up */}
        {isSignUp && (
          <div className='input-box flex'>
            <input type='email' placeholder='Email' required />
            <FaMailBulk className='icons' />
          </div>
        )}

        {/* Remember me and Forget Password */}
        {!isSignUp && (
          <div className='remember flex'>
            <label>
              <input type='checkbox' /> Remember me
            </label>
            <Link to='/forget-password'>Forget Password</Link> 
          </div>
        )}

        {/* Submit Button */}
        <button type='submit'>{isSignUp ? 'Sign Up' : 'Login'}</button>

        {/* Toggle between Login and Sign Up */}
        <div className='register-link'>
          <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <a href='#' onClick={toggleMode}>
              {isSignUp ? 'Login' : 'Register'}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSingup;
