import React,{useEffect, useState} from 'react'
import './Navbar.css'
import real from '../../Assets/realo.png'
import { IoIosCloseCircle } from "react-icons/io";
import {Link} from 'react-router-dom'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
  const [navbar,setNavbar]= useState('navbar')
  const showNavbar=()=>{
    setNavbar('navbar showNavbar')
  }
  const removeNavbar=()=>{
    setNavbar('navbar')
  }

  const[header,setHeader] = useState('header')
  const addBg=()=>{
     if(window.scrollY >= 20){
      setHeader('header addBg')
     }
  };
  useEffect(()=>{
    window.addEventListener('scroll',addBg);
    return ()=>{
      window.removeEventListener('scroll',addBg);
    }
  })
   
  return (
    <div className={header}>
    <div className="logodiv">
        <img src={real} alt='logo' className='logo'/>
        <p className='p'>BeOwn</p>
    </div>
    <div className={navbar}>
      <ul className='menu'>
      <li onClick={removeNavbar} className='listitem'>
            <Link to='/' className='link'>Home</Link>
        </li>
        <li onClick={removeNavbar} className='listitem'>
            <Link to='/use' className='link'>Popular Cars</Link>
        </li>
        <li onClick={removeNavbar} className='listitem'>
            <Link to='/trending' className='link'>Trending Cars</Link>
        </li>
        <li  onClick={removeNavbar} className='listitem'>
            <Link to='/auction' className='link'>Auctions</Link>
        </li>
        <li onClick={removeNavbar} className='listitem'>
            <Link to ='seller' className='link'>Recommended</Link>
        </li>
      </ul>
      <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
    </div>
    <div className='signUp '>
    
        <TbGridDots className='icon-nav toggleNavbarIcon' onClick={showNavbar}/>
        
    </div>
  
  </div>
  )
}

export default Navbar