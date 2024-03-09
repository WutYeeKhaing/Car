import React,{useEffect} from 'react'
import './Seller.css'
import  title from'../../Assets/Title.png'
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo.png'
import logo3 from '../../Assets/logo3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Seller= () => {
  useEffect(()=>{
    Aos.init(
     {
       duration:3000
     }
    )
   },[])
  return (
    <div className='seller section'>
      <div className="secContainer">
        <div  data-aos='fade-up' className='secHeading grid'>
          <h3 className='title'>
            Get a connection with TopSellers
          </h3>
          <p>Eldar Holds The Guinnes World Record For Being The Greatest salemans in the world </p>
        </div>
        <div className='sellerContainer grid'>
          <div  data-aos='fade-right' className='singleSeller flex'>
            <div className='imgC flex'>
              <img src={title} alt='title' />
            </div>
            <span className='info'>
              <h4 className='name'>
                BMW
              </h4>
              <p>from $90k</p>
            </span>
          </div>

          <div  data-aos='fade-right' className='singleSeller flex'>
            <div className='imgC flex'>
              <img src={logo1} alt='title' />
            </div>
            <span className='info'>
              <h4 className='name'>
                Nissan
              </h4>
              <p>from $70k</p>
            </span>
          </div>

          <div data-aos='fade-left' className='singleSeller flex'>
            <div className='imgC flex'>
              <img src={logo2} alt='title' />
            </div>
            <span className='info'>
              <h4 className='name'>
                Toyota
              </h4>
              <p>from $60k</p>
            </span>
          </div>
          <div data-aos='fade-left' className='singleSeller flex'>
            <div className='imgC flex'>
              <img src={logo3} alt='title' />
            </div>
            <span className='info'>
              <h4 className='name'>
                Ferrari
              </h4>
              <p>from $1M</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seller