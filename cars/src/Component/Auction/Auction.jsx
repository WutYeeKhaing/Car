import React, { useState, useRef,useEffect } from 'react';
import './Auction.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import cut from '../../Assets/cut6.png';
import cut1 from '../../Assets/cu.png';
import cut2 from '../../Assets/toyota.png';
import cut3 from '../../Assets/cut1.png';
import cut4 from '../../Assets/cut4.png';
import cut5 from '../../Assets/carcut.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const carData = [
  {
    imgSrc: cut,
    title: 'Used Mercedes-Benz G63',
    miles: '32000 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$90,990',
  },
  {
    imgSrc: cut1,
    title: 'Used Porsche 911',
    miles: '14000 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$67,000',
  },
  {
    imgSrc: cut2,
    title: 'Toyota Yaris',
    miles: '20063 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,800',
  },
  {
    imgSrc: cut3,
    title: 'Used FortGT 2017 white',
    miles: '17800 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$56,000',
  },
  {
    imgSrc: cut4,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$56,000',
  },
  {
    imgSrc: cut5,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$44,500',
  },
];

const Auction = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3; // Number of visible items
  useEffect(() => {
    Aos.init({
      duration: 3000
    });
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < carData.length - visibleItems) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className='auction section'>
      <div className='secContainer container'>
      <div data-aos='fade-right' className='secHeading flex'>
          <h3 className='secTitle'>Active Auction</h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' onClick={handlePrev} />
            <BsArrowRightShort className='icon rightIcon' onClick={handleNext} />
          </div>
        </div>
        <div className='carContainer'>
        {carData.slice(startIndex, startIndex + visibleItems).map((car, index) => (
            <div 
              key={index} 
              data-aos={index < visibleItems / 2 ? 'fade-right' : 'fade-left'}
              className={`singleCar ${index % 2 === 0 ? 'singleActive' : ''}`}
            >
              <div className='imgDiv'>
                <img src={car.imgSrc} alt={`Car ${index}`} />
              </div>
              <h5 className='carTitle'>{car.title}</h5>
              <span className='miles'>{car.miles}</span>
              <span className='AWD'>{car.awd}</span>
              <div className='price_seller flex'>
                <span className='price'>{car.price}</span>
                <Link to="/appointment" className='buy_btn'>
                  Test Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
