import React, { useState, useRef, useEffect } from 'react';
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
    title: 'Used Ford GT 2017',
    miles: '2000 Miles',
    price: '$390,990',
    awd: 'AWD Dual Motor', // Descriptive AWD information
    type: 'Coupe',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    imgSrc: cut1,
    title: 'Used Porsche 911 2023',
    miles: '4000 Miles',
    price: '$97,000',
    awd: 'RWD', // Rear-Wheel Drive
    type: 'Coupe',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '3 months',
  },
  {
    imgSrc: cut2,
    title: 'Toyota Yaris 2023',
    miles: '10063 Miles',
    price: '$37,800',
    awd: 'FWD', // Front-Wheel Drive
    type: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Hybrid',

  },
  {
    imgSrc: cut3,
    title: 'Used Nissan GT-R 2022',
    miles: '17800 Miles',
    price: '$76,000',
    awd: 'AWD', // General AWD system
    type: 'Coupe',
    transmission: 'Automatic',
    fuelType: 'Gasoline',

  },
  {
    imgSrc: cut4,
    title: 'Used Mclaren 2010',
    miles: '19563 Miles',
    price: '$186,000',
    awd: 'RWD', // Rear-Wheel Drive
    type: 'Coupe',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    warranty: '2 years',
  },
  {
    imgSrc: cut5,
    title: 'Used Ford GT 2017',
    miles: '18421 Miles',
    price: '$182,500',
    awd: 'AWD', // General AWD system
    type: 'Coupe',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    warranty: '5 months',
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
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + carData.length) % carData.length
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 1) % carData.length
    );
  };
  const getVisibleCars = () => {
    let visibleCars = [];
    for (let i = 0; i < visibleItems; i++) {
      visibleCars.push(carData[(startIndex + i) % carData.length]);
    }
    return visibleCars;
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
          {getVisibleCars().map((car, index) => (
            <div
              key={index}
              data-aos={index < visibleItems / 2 ? 'fade-right' : 'fade-left'}
              className={`singleCar ${index % 2 === 0 ? 'singleActive' : ''}`}
            >
              <div className='imgDiv'>
                <img src={car.imgSrc} alt={`Car ${index}`} />
              </div>
              <h5 className='carTitle'>{car.title}</h5>
              <div className='miles'>
                <div className='miles-column'>
                  <p>{car.miles}</p>
                  <p>{car.awd}</p>
                  <p>{car.type}</p>
                </div>
                <div className='miles-column'>
                  <p>{car.fuelType}</p>
                  <p>{car.transmission}</p>
                  <p>
                    Warranty: {car.warranty ? car.warranty : 'No warranty'}
                  </p>
                </div>

              </div>

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
