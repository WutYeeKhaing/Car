import React from 'react';
import './SearchResults.css';
import suvImage from '../../Assets/used2.jpg';
import sedanImage from '../../Assets/Sports car.jpg';
import truckImage from '../../Assets/Mercedes.jpg';

const imageMap = {
    "Nissan": suvImage,
    "Sport Car": sedanImage,
    "Mercedes": truckImage
};

const SearchResults = ({ results, hasSearched }) => {
  if (hasSearched && results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div className='searchResults'>
      <h3>Search Results</h3>
      <ul>
        {results.map((result) => (
          <li key={result.id} className='resultItem'>
            <img src={imageMap[result.type]} alt={result.model} className='resultImage' />
            <div className='resultDetails'>
              <p><strong>Type:</strong> {result.type}</p>
              <p><strong>Year:</strong> {result.year}</p>
              <p><strong>Model:</strong> {result.model}</p>
              <p><strong>Price:</strong> {result.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
