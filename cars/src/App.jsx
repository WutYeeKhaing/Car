import React from 'react'
import './App.css'
import Auction from './Component/Auction/Auction'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Trending from './Component/Trending/Trending'
import Sellers from './Component/Sellers/Seller'
import Review from './Component/Review/Review'
import Search from './Component/Search/Search'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import LoginSingup from './Component/LoginSingup/LoginSingup'
import Used from './Component/Used/Used'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/use' element={<Used/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/seller' element={<Sellers/>}/>
        <Route path='/auction' element={<Auction/>}/>
        <Route path="login" element={<LoginSingup/>}/>
        </Routes>
        <Search/>
         <Review/>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App