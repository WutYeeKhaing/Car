import React, { useState, useEffect } from 'react';
import './Search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'; // Import axios
import SearchResults from '../SearchResults/SearchResult';

const Search = () => {
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
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
      alert(validationError); // Show validation error as an alert
      return;
    }

    setLoading(true);
    setHasSearched(true); // Set hasSearched to true when a search is performed

    try {
      // Make API request to the mock server
      const response = await axios.get('http://localhost:5000/vehicles', {
        params: {
          type,
          year,
          model,
          price,
        },
      });

      setResults(response.data); // Assuming the API returns an array of results
    } catch (error) {
      console.error('Error fetching search results', error);
      alert('Failed to fetch search results. Please try again later.'); // Show error as an alert
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='search '>
      <div className='secContainer'>
        <h3 data-aos='fade-up' className='title'>
          Which Kind Of Vehicle Are You Looking For?
        </h3>

        <form className='searchDiv grid' onSubmit={handleSearch}>
          <input
            data-aos='fade-up'
            type='text'
            placeholder='Type'
            value={type}
            onChange={handleInputChange(setType)}
          />

          {/* Year Dropdown */}
          <select
            data-aos='fade-up'
            value={year}
            onChange={handleInputChange(setYear)}
          >
            <option value='' disabled>Select Year</option>
            {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <input
            data-aos='fade-up'
            type='text'
            placeholder='Model'
            value={model}
            onChange={handleInputChange(setModel)}
          />

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
