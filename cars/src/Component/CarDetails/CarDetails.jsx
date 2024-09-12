import React from 'react';
import { useParams } from 'react-router-dom';
import car from './car.jpg';
import car2 from './car2.jpg';
import car3 from './car3.jpg';
import './CarDetails.css'; // Assuming you have the CSS for styling

const CarDetails = () => {
  const { carId } = useParams();

  const carInfo = {
    model: 'Toyota YARIS',
    year: 2023,
    price: '47,050,000 MMK',
    description:
      'The Toyota YARIS is a compact car that is known for its reliability and fuel efficiency. It offers a comfortable ride with a range of modern features that make it a popular choice among city drivers.',
    specifications: {
      engine: '1.5L 4-Cylinder',
      horsepower: '106 hp',
      torque: '103 lb-ft',
      transmission: 'CVT',
      fuelEconomy: '30 MPG city / 37 MPG highway',
      drivetrain: 'Front-Wheel Drive',
    },
    features: [
      'Bluetooth Connectivity',
      'Rearview Camera',
      'Touchscreen Infotainment System',
      'Automatic Climate Control',
      'Adaptive Cruise Control',
      'Lane Departure Warning',
    ],
    images: [car, car2, car3], // Use the imported images
  };

  return (
    <div className="home">
      <div className="car-details">
        <h1>{carInfo.model}</h1>
        <p><strong>Year:</strong> {carInfo.year}</p>
        <p><strong>Price:</strong> {carInfo.price}</p>
        <p>{carInfo.description}</p>

        <div className="specs-features-container">
          <div className="spec-box">
            <h2>Specifications</h2>
            <ul>
              {Object.entries(carInfo.specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="spec-box">
            <h2>Features</h2>
            <ul>
              {carInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2>Gallery</h2>
        <div className="car-images">
          {carInfo.images.map((image, index) => (
            <img key={index} src={image} alt={`${carInfo.model} ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
