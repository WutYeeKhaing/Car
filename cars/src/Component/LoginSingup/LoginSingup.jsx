import React, { useState } from 'react';
import './LoginSingup.css';
import { FaUser, FaLock, FaMailBulk } from 'react-icons/fa';

const LoginSingup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setIsForgetPassword(false);
    setErrorMessage('');
  };

  const toggleForgetPassword = () => {
    setIsForgetPassword(true);
    setIsSignUp(false);
    setErrorMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp();
    } else if (isForgetPassword) {
      handleForgetPassword();
    } else {
      handleLogin();
    }
  };

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === formData.username);

    if (userExists) {
      setErrorMessage('Username already exists. Please choose another.');
    } else {
      users.push({
        username: formData.username,
        password: formData.password,
        email: formData.email,
      });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Sign up successful! You can now log in.');
      setIsSignUp(false);
    }
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) =>
        user.username === formData.username && user.password === formData.password
    );

    if (user) {
      alert('Login successful!');
      // Add your redirection logic here
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleForgetPassword = () => {
    // Handle forget password logic here
    alert('Password reset link sent to your email');
  };

  return (
    <div className='wrapper'>
      <form className='login-container' onSubmit={handleSubmit}>
        <h1 className='head'>
          {isForgetPassword
            ? 'Forgot Password'
            : isSignUp
            ? 'Sign Up'
            : 'Login'}
        </h1>

        {/* Username Input */}
        <div className='input-box flex'>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
            required
            disabled={isForgetPassword}
          />
          <FaUser className='icons' />
        </div>

        {/* Password Input: Not for forget password */}
        {!isForgetPassword && (
          <div className='input-box flex'>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              required
            />
            <FaLock className='icons' />
          </div>
        )}

        {/* Email Input: Show only for Sign Up and Forget Password */}
        {(isSignUp || isForgetPassword) && (
          <div className='input-box flex'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
            <FaMailBulk className='icons' />
          </div>
        )}

        {/* Error Message */}
        {errorMessage && <p className='error-message'>{errorMessage}</p>}

        {/* Forget Password Link */}
        {!isSignUp && !isForgetPassword && (
          <div className='remember flex'>
            <label>
              <input type='checkbox' /> Remember me
            </label>
            <a href='#' onClick={toggleForgetPassword}>
              Forget Password
            </a>
          </div>
        )}

        {/* Submit Button */}
        <button type='submit'>
          {isForgetPassword
            ? 'Send Reset Link'
            : isSignUp
            ? 'Sign Up'
            : 'Login'}
        </button>

        {/* Toggle between Login and Sign Up */}
        {!isForgetPassword && (
          <div className='register-link'>
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <a href='#' onClick={toggleMode}>
                {isSignUp ? 'Login' : 'Register'}
              </a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginSingup;
