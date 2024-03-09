import React,{useEffect} from 'react'
import './Review.css'
import Rita from '../../Assets/Rita.jpg'
import Car1 from '../../Assets/fr.jpg'
import Car2 from '../../Assets/Car2.jpg'
import Car3 from '../../Assets/inte2.jpg'
import Car4 from '../../Assets/Car4.jpg'
import Car5 from '../../Assets/Car3.jpg'
import seller1 from '../../Assets/seller1.jpg'
import seller2 from '../../Assets/seller2.jpg'
import seller3 from '../../Assets/seller3.jpg'
import seller4 from '../../Assets/seller4.jpg'
import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Review= () => {
  useEffect(()=>{
    Aos.init(
     {
       duration:3000
     }
    )
   },[])
  return (
    <div className='review section'>
      <div className='secContainer container'>
        <div data-aos='fade-up' className='secHeading flex'>
          <h3 className='secTitle'>
            Recent Reviews
          </h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>
        <div className='reviewContainer grid'>
          <div data-aos='fade-up' className='singleReview grid'>
            <div className='imgDiv'>
              <img src={Car1} alt='Car'/>
            </div>
            <h5 className='reviewC'>
              Ferrari Red 
            </h5>
            <span className='desc'>
              Good Cars Are Safe,Fast,Afforable to purchase,Economical to operate,Reliable,Capacious,Comfortable, and Attractive.
            </span>
            <div className='reviewDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewerImg'>
                  <img src={Rita} alt='Reviewer'/>
                </div>
                <div className='about'>
                  <span className='name'>
                    Rita Kee
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>
            <div className='rightDiv flex'>
              <AiFillStar className='icon'/>
              <blockquote>4.8</blockquote>

            </div>
            </div>
          </div>
          <div data-aos='fade-up' className='singleReview grid'>
            <div className='imgDiv'>
              <img src={Car5} alt='Car'/>
            </div>
            <h5 className='reviewC'>
              2023 Toyota Yairs
            </h5>
            <span className='desc'>
              Good Cars Are Safe,Fast,Afforable to purchase,Economical to operate,Reliable,Capacious,Comfortable, and Attractive.
            </span>
            <div className='reviewDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewerImg'>
                  <img src={seller1} alt='Reviewer'/>
                </div>
                <div className='about'>
                  <span className='name'>
                    Robin
                  </span>
                  <p>Operator</p>
                </div>
              </div>
            <div className='rightDiv flex'>
              <AiFillStar className='icon'/>
              <blockquote>4.8</blockquote>

            </div>
            </div>
          </div>
          <div data-aos='fade-up' className='singleReview grid'>
            <div className='imgDiv'>
              <img src={Car2} alt='Car'/>
            </div>
            <h5 className='reviewC'>
              2023 Toyota Yairs
            </h5>
            <span className='desc'>
              Good Cars Are Safe,Fast,Afforable to purchase,Economical to operate,Reliable,Capacious,Comfortable, and Attractive.
            </span>
            <div className='reviewDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewerImg'>
                  <img src={seller2} alt='Reviewer'/>
                </div>
                <div className='about'>
                  <span className='name'>
                    Felix
                  </span>
                  <p>Assiant</p>
                </div>
              </div>
            <div className='rightDiv flex'>
              <AiFillStar className='icon'/>
              <blockquote>4.8</blockquote>

            </div>
            </div>
          </div>
          <div  data-aos='fade-up' className='singleReview grid'>
            <div className='imgDiv'>
              <img src={Car4} alt='Car'/>
            </div>
            <h5 className='reviewC'>
              2023 Toyota Yairs
            </h5>
            <span className='desc'>
              Good Cars Are Safe,Fast,Afforable to purchase,Economical to operate,Reliable,Capacious,Comfortable, and Attractive.
            </span>
            <div className='reviewDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewerImg'>
                  <img src={seller3} alt='Reviewer'/>
                </div>
                <div className='about'>
                  <span className='name'>
                   Nicolas
                  </span>
                  <p>Manager</p>
                </div>
              </div>
            <div className='rightDiv flex'>
              <AiFillStar className='icon'/>
              <blockquote>4.8</blockquote>

            </div>
            </div>
          </div>
          <div  data-aos='fade-up' className='singleReview grid'>
            <div className='imgDiv'>
              <img src={Car3} alt='Car'/>
            </div>
            <h5 className='reviewC'>
              2023 Toyota Yairs
            </h5>
            <span className='desc'>
              Good Cars Are Safe,Fast,Afforable to purchase,Economical to operate,Reliable,Capacious,Comfortable, and Attractive.
            </span>
            <div className='reviewDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewerImg'>
                  <img src={seller4} alt='Reviewer'/>
                </div>
                <div className='about'>
                  <span className='name'>
                    YuRi
                  </span>
                  <p>Admin</p>
                </div>
              </div>
            <div className='rightDiv flex'>
              <AiFillStar className='icon'/>
              <blockquote>4.8</blockquote>

            </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Review