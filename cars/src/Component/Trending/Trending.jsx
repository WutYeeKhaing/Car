import React,{useEffect} from 'react'
import './Trending.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import Mer from '../../Assets/Mercedes.jpg'
import Fort from '../../Assets/Fort.jpg'
import Por from '../../Assets/cut3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Trending = () => {
  useEffect(()=>{
    Aos.init(
     {
       duration:3000
     }
    )
   },[])
  return (
    <div className='trending section'>
      <div className='secContainer container'>
      <div  data-aos='fade-up' className='secHeading flex'>
      <h3 className='secTitle'>
        Trending Near You
      </h3>
      <div className='navBtns flex'>
      <BsArrowLeftShort  className='icon leftIcon'/>
      <BsArrowRightShort  className='icon rightIcon'/>
      </div>
      </div>
      <div className='carContainer grid'>
        <div  data-aos='fade-up' data-aos-duration='2000'className='singleCar grid'>
          <div className='imgDiv'>
          <img src={Mer} alt="Car"/>
           </div>
        <h5 className='carTitle'>
          Used Mercedes-Benz G63
        </h5>
        <span className='miles'>
          14563 Miles
        </span>
        <span className='AWD'>
          AWD 4-Cylinder Turbo
        </span>
        <div className='price_seller flex'>
          <span className='price'>
            $57,890
          </span>
          <span className='seller'>
            Best Seller
          </span>
          </div>
        </div>
        <div  data-aos='fade-up' data-aos-duration='2500' className='singleCar grid'>
          <div className='imgDiv'>
          <img src={Por} alt="Car"/>
        </div>
        <h5 className='carTitle'>
          Used Ferrari Silver
        </h5>
        <span className='miles'>
          14563 Miles
        </span>
        <span className='AWD'>
          AWD 4-Cylinder Turbo
        </span>
        <div className='price_seller flex'>
          <span className='price'>
            $57,890
          </span>
          <span className='seller'>
            Best Seller
          </span>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='3000'  className='singleCar grid'>
          <div className='imgDiv'>
          <img src={Fort} alt="Car"/>
        </div>
        <h5 className='carTitle'>
          Used FortGT 2017 white
        </h5>
        <span className='miles'>
          14563 Miles
        </span>
        <span className='AWD'>
          AWD 4-Cylinder Turbo
        </span>
        <div className='price_seller flex'>
          <span className='price'>
            $57,890
          </span>
          <span className='seller'>
            Best Seller
          </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Trending