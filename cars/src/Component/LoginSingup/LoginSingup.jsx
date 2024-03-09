import React from 'react'
import './LoginSingup.css'

import {FaUser,FaLock} from 'react-icons/fa'
import { FaMailBulk } from "react-icons/fa";

const LoginSingup = () => {
  return (
    <div className='wrapper'>
    <form className='loginContainer' action=''>
      <h1 className='head'>Login</h1>
      <div className='input-box flex'>
        <input type='text' placeholder='Username' required/>
        <FaUser className='icons'/>
      </div>
      <div className='input-box flex'>
        <input type='password' placeholder='Password' required/>
        <FaLock className='icons'/>
      </div>
      <div className='input-box flex'>
        <input type='email' placeholder='Email'/>
        <FaMailBulk className='icons'/>
      </div>
      <div className='remember flex'>
        <label><input type='checkbox'/>Remember me</label>
        <a href='#'>Forget Password</a>
      </div>
      <button type='submit'>Login</button>
      <div className='register-link'>
        <p>Don't have an account?
          <a href='#'>Register</a>
        </p>
      </div>
    </form>
    </div>
    
  )
}

export default LoginSingup