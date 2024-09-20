import React, { useState, useRef, useEffect } from 'react';
import './Used.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import cut from '../../Assets/used.jpg';
import cut1 from '../../Assets/used1.jpg';
import cut2 from '../../Assets/used2.jpg';
import cut3 from '../../Assets/Toyota.jpg';
import cut4 from '../../Assets/used3.jpg';
import cut5 from '../../Assets/used4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const carData = [
  {
    imgSrc: cut,
    title: 'Used MG ZS EV 2022',
    miles: '15000 Miles',
    price: '$30,890',
    awd: 'AWD',  // All-Wheel Drive
    type: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Electric',
    warranty: '2 years',
  },
  {
    imgSrc: cut1,
    title: 'Used Porsche 911 2022',
    miles: '14000 Miles',
    price: '$80,000',
    awd: 'RWD',  // Rear-Wheel Drive
    type: 'Coupe',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '6 months',
  },
  {
    imgSrc: cut2,
    title: 'Used Volvo XC 40 2021',
    miles: '1463 Miles',
    price: '$49,090',
    awd: 'AWD',  // All-Wheel Drive
    type: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    // No warranty information
  },
  {
    imgSrc: cut3,
    title: 'Used Toyota Land Cruiser Prado 2024',
    miles: '14563 Miles',
    price: '$117,000',
    awd: 'AWD',  // All-Wheel Drive
    type: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    warranty: '1 year',
  },
  {
    imgSrc: cut4,
    title: 'Used Porsche 911 2023',
    miles: '10000 Miles',
    price: '$98,000',
    awd: 'RWD',  // Rear-Wheel Drive
    type: 'Coupe',
    transmission: 'Manual',
    fuelType: 'Gasoline',
  },
  {
    imgSrc: cut5,
    title: 'Used Land Rover Range Rover 2016',
    miles: '112000 Miles',
    price: '$40,000',
    awd: 'AWD',  // All-Wheel Drive
    type: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
  },
  {
    imgSrc: cut2,
    title: 'Toyota Yaris 2023',
    miles: '10063 Miles',
    price: '$37,800',
    awd: 'FWD',  // Front-Wheel Drive
    type: 'Hatchback',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
  },
];


const Used = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3; // Number of visible items
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000
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
        <div className='secHeading flex' data-aos="fade-right">
          <h3 className='secTitle'>Popular In 2024</h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' onClick={handlePrev} />
            <BsArrowRightShort className='icon rightIcon' onClick={handleNext} />
          </div>
        </div>
        <div className='carContainer' ref={containerRef} >
          {getVisibleCars().map((car, index) => (
            <div key={index} className='singleCar' data-aos={index < visibleItems / 2 ? 'fade-right' : 'fade-left'} data-aos-delay={index * 100}>
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

export default Used;