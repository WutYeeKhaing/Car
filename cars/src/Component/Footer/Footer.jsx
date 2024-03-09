import React,{useEffect} from 'react'
import './Footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer= () => {
  useEffect(()=>{
    Aos.init(
     {
       duration:3000
     }
    )
   },[])
  return (
    <div className='footer'>
      <div className='footerContainer container'>
       <div className='footerMenuDiv grid'>
        <div data-aos='fade-up' className='singleGrid'>
          <span className='footerTitle'>
            About
          </span>
          <ul className='footerUl grid'>
           <li className='footerli'>How it works</li>
           <li className='footerli'>Careers</li>
           <li className='footerli'>Affliates</li>
           <li className='footerli'>Media</li>
          </ul>
        </div>
        <div  data-aos='fade-up' className='singleGrid'>
          <span className='footerTitle'>
            Become Seller
          </span>
          <ul className='footerUl grid'>
           <li className='footerli'>Add Vehicles</li>
           <li className='footerli'>Resource Center</li>
           <li className='footerli'>Bonds</li>
           <li className='footerli'>Release Date</li>
          </ul>
        </div>
        <div  data-aos='fade-up' className='singleGrid'>
          <span className='footerTitle'>
            Community
          </span>
          <ul className='footerUl grid'>
           <li className='footerli'>Recommendation</li>
           <li className='footerli'>Gift Cards</li>
           <li className='footerli'>Top Ups</li>
           <li className='footerli'>Selling</li>
          </ul>
        </div>
        <div  data-aos='fade-up' className='singleGrid'>
          <span className='footerTitle'>
          Booking Support
          </span>
          <ul className='footerUl grid'>
           <li className='footerli'>Updates for Insurance</li>
           <li className='footerli'>Help center</li>
           <li className='footerli'>Garages</li>
           <li className='footerli'>Trust and Safety</li>
          </ul>
        </div>
       </div>
       <div className='lowerSection flex'>
        <p >2024 All right reserved</p>
        <blockquote >TMTech Projects </blockquote>
       </div>
      </div>
    </div>
  )
}

export default Footer;