import React,{useEffect} from 'react'
import './Auction.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import cut from '../../Assets/cut6.png'
import cut1 from '../../Assets/cu.png'
import  cut2 from '../../Assets/cut5.png'
import cut3 from '../../Assets/1t.png'
import cut4 from '../../Assets/cut4.png'
import cut5 from '../../Assets/carcut.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Auction= () => {
  useEffect(()=>{
    Aos.init(
     {
       duration:3000
     }
    )
   },[])
  return (
    <div className='auction section'>
      <div className='secContainer container'>
      <div data-aos='fade-down' className='secHeading flex'>
      <h3 className='secTitle'>
        Active Auction
      </h3>
      <div className='navBtns flex'>
      <BsArrowLeftShort  className='icon leftIcon'/>
      <BsArrowRightShort  className='icon rightIcon'/>
      </div>
      </div>
      <div className='carContainer grid'>
        <div data-aos='fade-right' className='singleCar grid singleActive'>
          <div className='imgDiv'>
          <img src={cut} alt="Car"/>
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
          <span className='buy_btn'>
            Buy Now
          </span>
          </div>
        </div>
        <div data-aos='fade-right' className='singleCar grid'>
          <div className='imgDiv'>
          <img src={cut1} alt="Car"/>
        </div>
        <h5 className='carTitle'>
          Used Porsche 911
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
          <span className='buy_btn'>
            Buy Now
          </span>
          </div>
        </div>
        <div data-aos='fade-right' className='singleCar grid singleActive'>
          <div className='imgDiv'>
          <img src={cut2} alt="Car "/>
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
          <span className='buy_btn'>
           Buy Now
          </span>
          </div>
        </div>
        <div data-aos='fade-left' className='singleCar grid'>
          <div className='imgDiv'>
          <img src={cut3} alt="Car "/>
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
          <span className='buy_btn'>
           Buy Now
          </span>
          </div>
        </div>
        <div data-aos='fade-left' className='singleCar grid singleActive'>
          <div className='imgDiv'>
          <img src={cut4} alt="Car "/>
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
          <span className='buy_btn'>
           Buy Now
          </span>
          </div>
        </div>
        <div  data-aos='fade-left' className='singleCar grid'>
          <div className='imgDiv'>
          <img src={cut5} alt="Car "/>
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
          <span className='buy_btn'>
           Buy Now
          </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Auction