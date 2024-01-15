import React from 'react';
import logo from '../Assets/TE.png';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter, FaLinkedin, FaLocationArrow } from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';

const FooterMobile = () => {
  return (
    <div className='mobile-footer'>
      <div className='techi'>
      <img src={logo} alt='logo' className='footer-logo-mobile' />
      </div>
      <h1 className='com-name-mobile'>TechiEco Solutions Pvt Ltd.</h1>
      <div className='social-medias-mobile'>
        <a href='https://www.linkedin.com/company/96943280/admin/feed/posts/' target='_blank'>
          <FaLinkedin className='social' style={{ color: 'white', height: '25px', width: '25px' }} />
        </a>
        <a href='https://twitter.com/techiEco_S' target='_blank'>
          <FaTwitter className='social' style={{ color: 'white', height: '25px', width: '25px' }} />
        </a>
        <a href='https://www.instagram.com/techieco_solutions/' target='_blank'>
          <RiInstagramFill className='social' style={{ color: 'white', height: '25px', width: '25px' }} />
        </a>
        <a href='mailto:techiecos@gmail.com' target='_blank'>
        <MdEmail className='social' style={{ color: 'white', height: '25px', width: '25px' }} />
        </a>
        
      </div>
      <div className='location-mobile'>
        <FaLocationArrow className='location-icon' style={{ color: 'white', height: '25px', width: '25px' }} />
        <p className='location-text'>N-84 S/CITY GURUGRAM SADAR BAZAR GURGAON, GURGAON-122001, HARYANA</p>
      </div>
    </div>
  );
};

export default FooterMobile;
