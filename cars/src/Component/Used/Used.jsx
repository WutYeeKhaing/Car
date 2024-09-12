import React, { useState, useRef } from 'react';
import './Used.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import cut from '../../Assets/used.jpg';
import cut1 from '../../Assets/used1.jpg';
import cut2 from '../../Assets/used2.jpg';
import cut3 from '../../Assets/Toyota.jpg';
import cut4 from '../../Assets/used3.jpg';
import cut5 from '../../Assets/used4.jpg';

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
    title: 'Used Nissan white',
    miles: '1463 Miles',
    price: '$99,090',
    awd: 'AWD 4-Cylinder Turbo',
  },
  {
    imgSrc: cut3,
    title: 'Used Toyota Truck',
    miles: '14563 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$37,000',
  },
  {
    imgSrc: cut4,
    title: 'Used Sport Car',
    miles: '80000 Miles',
    awd: 'AWD 4-Cylinder Turbo',
    price: '$38,000',
  },
  {
    imgSrc: cut5,
    title: 'Used Range Rover',
    miles: '12000 Miles',
    price: '$60,000',
    awd: 'AWD 4-Cylinder Turbo',
  },
];

const Used = () => {
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
          <h3 className='secTitle'>Popular In 2024</h3>
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
                <span className='buy_btn'>Connect Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Used;
