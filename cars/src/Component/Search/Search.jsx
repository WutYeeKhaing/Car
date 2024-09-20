import React, { useState, useEffect } from 'react';
import './Search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'; // Import axios
import SearchResults from '../SearchResults/SearchResult';
import logo from '../../Assets/realo.png'
import cut from '../../Assets/cut6.png';
import cut1 from '../../Assets/cu.png';
import cut2 from '../../Assets/toyota.png';
import cut3 from '../../Assets/1t.png';
import cut4 from '../../Assets/cut4.png';
import cut5 from '../../Assets/carcut.png';
const carData = {
  Sedan: ['Model S', 'Model 3', 'Accord', 'Civic'],
  SUV: ['Model X', 'Model Y', 'CR-V', 'Highlander'],
  Truck: ['F-150', 'Silverado', 'Ram 1500'],
  Coupe: ['Mustang', 'Camaro', 'Challenger'],
  SportsCar : ['GT'],
  Hatchback: ['Yaris'],
};

const mockResults = [
  {
    id: 1,
    type: 'Sedan',
    model: 'Model S',
    year: '2022',
    imgSrc: cut1,  // Add image source
    title: 'Used Model S 2022',
    miles: '14,563 Miles',
    price: '$80,000',
    awd: 'AWD Dual Motor',
    transmission: 'Automatic',
    fuelType: 'Electric',
    warranty: '2 years',
  },
  {
    id: 2,
    type: 'SUV',
    model: 'Model X',
    year: '2021',
    imgSrc: logo,  // Add image source
    title: 'Used Model X 2021',
    miles: '10,245 Miles',
    awd: 'AWD Dual Motor',
    price: '$90,000',
    transmission: 'Automatic',
    fuelType: 'Electric',
    warranty: '2 years',
  },
  {
    id: 3,
    type: 'Truck',
    model: 'F-150',
    year: '2020',
    imgSrc: logo,  // Add image source
    title: 'Used F-150 2020',
    miles: '20,000 Miles',
    awd: '4WD V8 Engine',
    price: '$50,000',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 4,
    type: 'SUV',
    model: 'G63',
    year: '2019',
    imgSrc: cut,  // Add image source
    title: 'Used Mercedes-Benz G63',
    miles: '32,000 Miles',
    awd: 'AWD V8 Biturbo',
    price: '$90,990',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 5,
    type: 'Coupe',
    model: '911',
    year: '2018',
    imgSrc: cut1,  // Add image source
    title: 'Used Porsche 911',
    miles: '14,000 Miles',
    awd: 'AWD 6-Cylinder Turbo',
    price: '$67,000',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 6,
    type: 'Hatchback',
    model: 'Yaris',
    year: '2020',
    imgSrc: cut2,  // Add image source
    title: 'Toyota Yaris',
    miles: '20,063 Miles',
    price: '$57,800',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    warranty: '2 years',
  },
  {
    id: 7,
    type: 'SportsCar',
    model: 'GT',
    year: '2017',
    imgSrc: cut3,  // Add image source
    title: 'Used Ford GT 2017 White',
    miles: '17,800 Miles',
    awd: 'AWD V6 EcoBoost',
    price: '$56,000',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 8,
    type: 'Truck',
    model: 'F-150',
    year: '2018',
    imgSrc: cut4,  // Add image source
    title: 'Used Ford F-150',
    miles: '14,563 Miles',
    awd: 'AWD V8 Engine',
    price: '$56,000',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 9,
    type: 'Truck',
    model: 'F-150',
    year: '2019',
    imgSrc: cut5,  // Add image source
    title: 'Used Ford F-150 2019',
    miles: '14,563 Miles',
    awd: 'AWD V8 Engine',
    price: '$44,500',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 10,
    type: 'Sedan',
    model: 'Model S',
    year: '2021',
    imgSrc: logo,  // Add image source
    title: 'Used Tesla Model S',
    miles: '12,000 Miles',
    awd: 'AWD Dual Motor',
    price: '$78,000',
    transmission: 'Automatic',
    fuelType: 'Electric',
    warranty: '2 years',
  },
  {
    id: 11,
    type: 'SUV',
    model: 'Model X',
    year: '2020',
    imgSrc: logo,  // Add image source
    title: 'Used Tesla Model X',
    miles: '10,500 Miles',
    awd: 'AWD Dual Motor',
    price: '$90,000',
    transmission: 'Automatic',
    fuelType: 'Electric',
    warranty: '2 years',
  },
  {
    id: 12,
    type: 'Sedan',
    model: 'Accord',
    year: '2019',
    imgSrc: logo,  // Add image source
    title: 'Used Honda Accord',
    miles: '22,000 Miles',
    awd: 'FWD 4-Cylinder',
    price: '$30,000',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 13,
    type: 'Sedan',
    model: 'Civic',
    year: '2020',
    imgSrc: logo,  // Add image source
    title: 'Used Honda Civic',
    miles: '18,500 Miles',
    awd: 'FWD 4-Cylinder',
    price: '$25,000',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    warranty: '1 year',
  },
  {
    id: 14,
    type: 'SUV',
    model: 'MG ZS EV',
    year: '2022',
    imgSrc: cut,  // Add image source
    title: 'Used MG ZS EV 2022',
    miles: '15,000 Miles',
    awd: 'AWD',
    price: '$30,890',
    transmission: 'Automatic',
    fuelType: 'Electric',
    warranty: '2 years',
  }
];



const Search = () => {
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [results, setResults] = useState([]); // To store search results
  const [loading, setLoading] = useState(false); // To show a loading state
  const [hasSearched, setHasSearched] = useState(false); // To track if a search has been performed

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  const validateInputs = () => {
    if (!type || !year || !model || !price) {
      return 'All fields are required!';
    }
    return '';
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const validationError = validateInputs();
  
    if (validationError) {
      alert(validationError);
      return;
    }
  
    setLoading(true);
    setHasSearched(true);
    setResults([]); // Clear previous results
  
    // Simulate search result
    setTimeout(() => {
      // Parse selected price range
      const [minPrice, maxPrice] = price.split('-').map(p => parseInt(p.replace(/[^\d]/g, ''), 10));
      
      const filteredResults = mockResults.filter(car => {
        const carPrice = parseInt(car.price.replace(/[^\d]/g, ''), 10);
        return car.type === type && car.model === model && car.year === year &&
          carPrice >= minPrice && (maxPrice ? carPrice <= maxPrice : true);
      });
  
      setResults(filteredResults.length > 0 ? filteredResults : []);
      setLoading(false);
    }, 1000);  // Simulate delay
  };
  
  const getAvailableYears = () => {
    return [...new Set(mockResults
      .filter(car => car.type === type && car.model === model)
      .map(car => car.year)
    )];
  };


  return (
    <div className='search '>
      <div className='secContainer'>
        <h3 data-aos='fade-up' className='title'>
          Which Kind Of Vehicle Are You Looking For?
        </h3>

        <form className='searchDiv grid' onSubmit={handleSearch}>
          {/* Type Dropdown */}
          <select
            data-aos='fade-up'
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setModel(''); // Reset model when type changes
              setYear('');   // Reset year when type changes
            }}
          >
            <option value='' disabled>Select Type</option>
            {[...new Set(mockResults.map(car => car.type))].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
 {/* Model Dropdown */}
 <select
            data-aos='fade-up'
            value={model}
            onChange={handleInputChange(setModel)}
            disabled={!type}
          >
            <option value='' disabled>Select Model</option>
            {/* Filter models based on the selected type */}
            {[...new Set(mockResults
              .filter(car => car.type === type)
              .map(car => car.model)
            )].map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>

           {/* Year Dropdown */}
           <select
            data-aos='fade-up'
            value={year}
            onChange={handleInputChange(setYear)}
            disabled={!model}
          >
            <option value='' disabled>Select Year</option>
            {/* Display filtered years based on selected model */}
            {getAvailableYears().length > 0 ? (
              getAvailableYears().map(year => (
                <option key={year} value={year}>{year}</option>
              ))
            ) : (
              <option disabled>No Available Years</option>
            )}
          </select>

         

          {/* Price Range Dropdown */}
          <select
            data-aos='fade-up'
            value={price}
            onChange={handleInputChange(setPrice)}
          >
            <option value='' disabled>Select Price Range</option>
            <option value='0-10000'>$0 - $10,000</option>
            <option value='10001-20000'>$10,001 - $20,000</option>
            <option value='20001-30000'>$20,001 - $30,000</option>
            <option value='30001-50000'>$30,001 - $50,000</option>
            <option value='50001+'>$50,001+</option>
          </select>

          <button data-aos='fade-up' className='btn primaryBtn flex'>
            <AiOutlineSearch className='icon' />
            <span>{loading ? 'Searching...' : 'Search'}</span>
          </button>
        </form>

        {/* Search Results */}
        <SearchResults results={results} hasSearched={hasSearched} />
      </div>
    </div>
  );
};

export default Search;
