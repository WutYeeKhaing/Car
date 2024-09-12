import React, { useEffect } from 'react'
import './Seller.css'
import title from '../../Assets/Title.png'
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo.png'
import logo3 from '../../Assets/logo3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Review from '../Review/Review'
const Seller = () => {
  useEffect(() => {
    Aos.init(
      {
        duration: 3000
      }
    )
  }, [])
  return (
    <div className='seller section'>

      <div className="secContainer">
      
        <div data-aos='fade-up' className='secHeading grid'>
          <h3 className='title'>
            Discover Top-Tier Vehicles from Leading Brands
          </h3>
          <p>
            Explore our collection of top-quality cars from renowned brands that continue to set the benchmark in the automotive industry. Whether you're looking for the latest models or time-tested favorites, our diverse selection ensures you'll find a vehicle that meets your highest standards and driving needs.
          </p>

        </div>
        <div className='sellerContainer grid'>
          <div data-aos='fade-right' className='singleSeller flex'>
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

          <div data-aos='fade-right' className='singleSeller flex'>
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
      <Review />
    </div>
  )
}

export default Seller