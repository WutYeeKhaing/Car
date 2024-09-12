import React,{useEffect} from 'react'
import './Home.css'
import cut from '../../Assets/toyota.png'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
   Aos.init(
    {
      duration: 3000
    }
   )
  },[])
  const navigate = useNavigate();

  const handleTestDrive = () => {
    navigate('/appointment');
  };

  const handleMoreDetails = (carId) => {
    navigate(`/car-details/${carId}`); // Pass the carId dynamically
  };
  return (
    <div className='home'>
      <div className="secContainer">
        <div className="hometext">
          <span  data-aos='fade-up'  className="homeSpan">
           Meet Your New Car
          </span>
          <h1 className='homeH'>
          Toyota YARIS 2023
          </h1>
          <div className='btns flex'>
          <button data-aos='fade-right' className='btn' onClick={() => handleMoreDetails(1)}>
        More Details
      </button>
      <button data-aos='fade-left' className='btn primaryBtn' onClick={handleTestDrive}>
        Test Drive
      </button>
          </div>
          <div data-aos='fade-down-right' className='homeimg'>
            <img src={cut} alt='home'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home