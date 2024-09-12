import React, { useState, useRef } from 'react';
import './Auction.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import cut from '../../Assets/cut6.png';
import cut1 from '../../Assets/cu.png';
import cut2 from '../../Assets/cut5.png';
import cut3 from '../../Assets/1t.png';
import cut4 from '../../Assets/cut4.png';
import cut5 from '../../Assets/carcut.png';

const carData = [
  {
    imgSrc: cut,
    title: 'Used Mercedes-Benz G63',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: cut1,
    title: 'Used Porsche 911',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: cut2,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: cut3,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: cut4,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
  {
    imgSrc: cut5,
    title: 'Used FortGT 2017 white',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$57,890',
  },
];

const Auction = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3; // Number of visible items
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
    <div className='auction section'>
      <div className='secContainer container'>
        <div className='secHeading flex'>
          <h3 className='secTitle'>Active Auction</h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' onClick={handlePrev} />
            <BsArrowRightShort className='icon rightIcon' onClick={handleNext} />
          </div>
        </div>
        <div className='carContainer' ref={containerRef}>
          {carData.slice(startIndex, startIndex + visibleItems).map((car, index) => (
            <div key={index} className={`singleCar  ${index % 2 === 0 ? 'singleActive' : ''}`}>
              <div className='imgDiv'>
                <img src={car.imgSrc} alt={`Car ${index}`} />
              </div>
              <h5 className='carTitle'>{car.title}</h5>
              <span className='AWD'>{car.awd}</span>
              <span className='miles'>{car.miles}</span>
             
              <div className='price_seller flex'>
                <span className='price'>{car.price}</span>
                <span className='buy_btn'>Connect Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
