import React, { useState, useRef } from 'react';
import './Trending.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Mer from '../../Assets/Mercedes.jpg';
import Fort from '../../Assets/Fort.jpg';
import Por from '../../Assets/cut3.jpg';
import { Link } from 'react-router-dom';
const carData = [
  {
    imgSrc: Mer,
    title: 'Used Mercedes-Benz G63',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: Por,
    title: 'Used Ferrari Silver',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: Fort,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
];

const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 1; // Number of visible items at a time
  const containerRef = useRef(null);

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
    <div className='trending section'>
      <div className='secContainer container'>
        <div className='secHeading flex'>
          <h3 className='secTitle'>Trending Near You</h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' onClick={handlePrev} />
            <BsArrowRightShort className='icon rightIcon' onClick={handleNext} />
          </div>
        </div>
        <div className='carContainer' ref={containerRef}>
          {carData.slice(startIndex, startIndex + visibleItems).map((car, index) => (
            <div key={index} className='singleCar'>
              <div className='imgDiv'>
                <img src={car.imgSrc} alt={`Car ${index}`} />
              </div>
              <h5 className='carTitle'>{car.title}</h5>
              <span className='AWD'>{car.awd}</span>
              <span className='miles'>{car.miles}</span>

              <div className='price_seller flex'>
                <span className='price'>{car.price}</span>
                <Link to="/appointment" className='buy_btn'>
                  Connect Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
