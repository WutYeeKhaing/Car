import React,{useEffect} from 'react'
import './Home.css'
import cut from '../../Assets/toyota.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
   Aos.init(
    {
      duration: 3000
    }
   )
  },[])
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
            <button data-aos='fade-right' className='btn'>More Details</button>
            <button data-aos='fade-left'className='btn primaryBtn'>Test Drive</button>
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