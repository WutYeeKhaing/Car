import React, { useState, useRef,useEffect } from 'react';
import './Review.css';
import Rita from '../../Assets/Rita.jpg';
import Car1 from '../../Assets/fr.jpg';
import Car2 from '../../Assets/Car2.jpg';
import Car3 from '../../Assets/inte2.jpg';
import Car4 from '../../Assets/Car4.jpg';
import Car5 from '../../Assets/Car3.jpg';
import seller1 from '../../Assets/seller1.jpg';
import seller2 from '../../Assets/seller2.jpg';
import seller3 from '../../Assets/seller3.jpg';
import seller4 from '../../Assets/seller4.jpg';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
const reviewData = [
  {
    imgSrc: Car1,
    reviewTitle: 'Ferrari LaFerrari 2014',
    reviewText: "Thrilling performance and stylish design. Perfect for driving enthusiasts.",
    reviewerImg: Rita,
    reviewerName: 'Rita Kee',
    reviewerRole: 'Chief Editor',
    rating: '4.8',
  },
  {
    imgSrc: Car5,
    reviewTitle: 'Afeela',
    reviewText: "Great for daily commutes with a spacious interior and high fuel efficiency.",
    reviewerImg: seller1,
    reviewerName: 'Robin',
    reviewerRole: 'Operator',
    rating: '4.8',
  },
  {
    imgSrc: Car2,
    reviewTitle: 'MERCEDES-BENZ 300SE 1967',
    reviewText: "Luxurious and tech-savvy. Ideal for a premium driving experience." ,
    reviewerImg: seller2,
    reviewerName: 'Felix',
    reviewerRole: 'Assistant',
    rating: '4.8',
  },
  {
    imgSrc: Car4,
    reviewTitle: 'Porsche 911 1990',
    reviewText: "Classic design with reliable performance. Great value for those who appreciate vintage style.",
    reviewerImg: seller3,
    reviewerName: 'Nicolas',
    reviewerRole: 'Manager',
    rating: '4.8',
  },
  {
    imgSrc: Car3,
    reviewTitle: 'New Mercedes-Benz GLC',
    reviewText: "Smooth drive with advanced features. A top choice for car enthusiasts.",
    reviewerImg: seller4,
    reviewerName: 'YuRi',
    reviewerRole: 'Admin',
    rating: '4.8',
  },
];

const Review = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3; // Number of visible items
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

 
  const handlePrev = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - 1 + reviewData.length) % reviewData.length
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + 1) % reviewData.length
    );
  };

  const getVisibleReviews = () => {
    let visibleReviews = [];
    for (let i = 0; i < visibleItems; i++) {
      visibleReviews.push(reviewData[(startIndex + i) % reviewData.length]);
    }
    return visibleReviews;
  };

  return (
    <div className='review' data-aos="fade-up">
      <div className='secContainer'>
        <div className='secHeading flex'>
          <h3 className='secTitle'>Recommended Cars</h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' onClick={handlePrev} />
            <BsArrowRightShort className='icon rightIcon' onClick={handleNext} />
          </div>
        </div>
        <div className='reviewContainer grid' ref={containerRef}>
        {getVisibleReviews().map((review, index) => (
            <div key={index} className='singleReview grid' data-aos="fade-up" data-aos-delay={index * 100}>
              <div className='imgDiv'>
                <img src={review.imgSrc} alt='Car'/>
              </div>
              <h5 className='reviewC'>{review.reviewTitle}</h5>
              <span className='desc'>{review.reviewText}</span>
              <div className='reviewDiv flex'>
                <div className='leftDiv flex'>
                  <div className='reviewerImg'>
                    <img src={review.reviewerImg} alt='Reviewer'/>
                  </div>
                  <div className='about'>
                    <span className='name'>{review.reviewerName}</span>
                    <p>{review.reviewerRole}</p>
                  </div>
                </div>
                <div className='rightDiv flex'>
                  <AiFillStar className='icon'/>
                  <blockquote>{review.rating}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Review