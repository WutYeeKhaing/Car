import React, { useEffect } from 'react';
import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <footer className='footer'>
      <div className='footerContainer container'>
        <div className='footerContact'>
          <div data-aos='fade-up' className='contactSection'>
            <h2 className='footerTitle'>Contact Us</h2>
            <ul className='contactList'>
              <li><strong>Email:</strong> <a href='beown3231@gmail.com'>beown3231@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href='tel:+11234567890'>+ (95)944000800</a></li>
              <li><strong>Address:</strong> 556 BoMinKaung Street,EastDagon, Yangon</li>
            </ul>

          </div>
        </div>

        <div className='lowerSection flex'>
          <p>2023 All rights reserved</p>
          <blockquote>BeOwn Group</blockquote>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
