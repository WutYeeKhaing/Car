import React, { useEffect } from 'react';
import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className='footer'>
      <div className='footerContainer container'>
        <div className='footerMenuDiv grid'>
          {/* Footer Section */}
          {footerSections.map((section, index) => (
            <div key={index} data-aos='fade-up' className='singleGrid'>
              <span className='footerTitle'>{section.title}</span>
              <ul className='footerUl grid'>
                {section.links.map((link, idx) => (
                  <li key={idx} className='footerli'>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='lowerSection flex'>
          <p>2023 All rights reserved</p>
          <blockquote>BeOwn Group</blockquote>
        </div>
      </div>
    </div>
  );
};

const footerSections = [
  {
    title: 'About',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Careers', href: '/careers' },
      { label: 'Affiliates', href: '/affiliates' },
      { label: 'Media', href: '/media' },
    ],
  },
  {
    title: 'Become Seller',
    links: [
      { label: 'Add Vehicles', href: '/add-vehicles' },
      { label: 'Resource Center', href: '/resource-center' },
      { label: 'Bonds', href: '/bonds' },
      { label: 'Release Date', href: '/release-date' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Recommendation', href: '/recommendations' },
      { label: 'Gift Cards', href: '/gift-cards' },
      { label: 'Top Ups', href: '/top-ups' },
      { label: 'Selling', href: '/selling' },
    ],
  },
  {
    title: 'Booking Support',
    links: [
      { label: 'Updates for Insurance', href: '/insurance-updates' },
      { label: 'Help Center', href: '/help-center' },
      { label: 'Garages', href: '/garages' },
      { label: 'Trust and Safety', href: '/trust-safety' },
    ],
  },
];

export default Footer;
