import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css'; // Ensure to style the new elements
import AOS from 'aos';
import 'aos/dist/aos.css';

const SearchResults = ({ results, hasSearched }) => {
  AOS.init();

  if (!hasSearched) {
    return null; // Do not render anything if no search has been performed
  }

  return (
    <div className='searchResults'>
      {results.length > 0 ? (
        results.map((car, index) => (
          <div 
            key={index} 
            data-aos={index < results.length / 2 ? 'fade-right' : 'fade-left'}
            className={`resultItem ${index % 2 === 0 ? 'singleActive' : ''}`}
          >
            <div className='imgDiv'>
              <img src={car.imgSrc} alt={`Car ${index}`} />
            </div>
            <div className='resultDetails'>
              <h5 className='carTitle'>{car.title}</h5>
              <span className='AWD'>{car.awd}</span>
              <span className='miles'>{car.miles}</span>
              <div className='price_seller'>
                <span className='price'>{car.price}</span>
                <Link to="/appointment" className='buy_btn'>
                  Test Now
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
