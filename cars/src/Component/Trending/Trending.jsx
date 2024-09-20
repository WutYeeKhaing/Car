import React, { useState, useRef, useEffect } from 'react';
import './Trending.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Mer from '../../Assets/Mercedes.png';
import Fort from '../../Assets/Fort.png';
import Por from '../../Assets/cut3.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const carData = [
  {
    imgSrc: Mer,
    title: 'Used Mercedes-Benz-G-Class 2020',
    miles: '12433 Miles',
    price: '$90,000',
    awd: 'AWD', // All-Wheel Drive
    type: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    imgSrc: Por,
    title: 'Used Ferrari Portofino 2022',
    miles: '11973 Miles',
    price: '$320,000',
    awd: 'RWD', // Rear-Wheel Drive
    type: 'Convertible',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '2 years',
  },
  {
    imgSrc: Fort,
    title: 'Used Ford GT 2020',
    miles: '4213 Miles',
    price: '$380,000',
    awd: 'RWD', // Rear-Wheel Drive
    type: 'Coupe',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    warranty: 'No warranty ',
  },
];


const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 1; // Number of visible items at a time
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? carData.length - visibleItems : prevIndex - 1
    );
  };

  // Handle next click with wrapping logic
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === carData.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='trending section' >
      <div className='secContainer container'>
        <div className='secHeading flex' data-aos="fade-right">
          <h3 className='secTitle'>Trending Near You</h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' onClick={handlePrev} />
            <BsArrowRightShort className='icon rightIcon' onClick={handleNext} />
          </div>
        </div>
        <div className='carContainer' ref={containerRef} data-aos="fade-left" >
          {carData.slice(startIndex, startIndex + visibleItems).map((car, index) => (
            <div key={index} className='singleCar'  data-aos-delay={index * 100}>
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

export default Trending;