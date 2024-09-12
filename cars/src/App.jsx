import React from 'react'
import './App.css'
import Auction from './Component/Auction/Auction'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Trending from './Component/Trending/Trending'
import Sellers from './Component/Sellers/Seller'
import Search from './Component/Search/Search'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginSingup from './Component/LoginSingup/LoginSingup'
import Used from './Component/Used/Used'
import ForgetPassword from './Component/LoginSingup/ForgotPassword'
import Appointment from './Component/Appointment/Appointment'
import CarDetails from './Component/CarDetails/CarDetails'

const App = () => {
  const location = useLocation(); // Get the current location to control conditional rendering

  const isFullPage = ['/appointment', '/car-details', '/login', '/forget-password']
  .some(path => location.pathname.includes(path));

  
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/use' element={<Used />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/seller' element={<Sellers />} />
        <Route path='/auction' element={<Auction />} />
        <Route path='/login' element={<LoginSingup />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/car-details/:carId' element={<CarDetails />} />
      </Routes>
      {/* Conditionally render Search and Review only if it's not a full-page component */}
      {!isFullPage && <Search />}
     
      <Footer />
    </div>
  )
}

export default App
