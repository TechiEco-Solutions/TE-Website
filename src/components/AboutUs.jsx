// AboutUsPage.js

import React from 'react';
import we from "../Assets/icons8-we-48.png";
import about from "../Assets/icons8-about-48.png";
import contact from "../Assets/icons8-contact-us-48.png"
import eco from "../Assets/icons8-eco-friendly-64.png"
const AboutUsPage = () => {
  return (
    <div className="about-us-page">
  
      <section>
      <div className="title-container" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' ,alignItems: 'center' }}>
        <h2>Welcome to Techi<span style={{ color: 'darkgreen' }}>Eco </span></h2>
        <img src={we} alt="Your Image" style={{ marginLeft: '20px', width: '50px', height: '50px' }} />
      </div>
        <p>
          <strong>Our Mission</strong>: At TechiEco Solutions Pvt. Ltd., our mission is to revolutionize waste management through cutting-edge technology, combining the power of IoT and AIML. We take pride in offering a range of innovative waste management robots, all backed by patented technology developed by our forward-thinking board of directors.
        </p>
        <div className="dots-container"></div>
      </section>
      <section>

      <div className="title-container" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' ,alignItems: 'center' }}>
        <h2>Who We Are ?</h2>
        <img src={about} alt="Your Image" style={{ marginLeft: '20px', width: '50px', height: '50px' }} />
      </div>
        <p>
        TechiEco Solutions Pvt. Ltd. is a firm that sells waste management robots built using IoT and AIML. The company's board of directors have patented the technology that they're offering. The technology aims to provide a wide range of modifications and applications. It also aims to build multiple other technologies that aid in improving the ecosystem.

        TechiEco Solutions Pvt. Ltd.’s ideal customers include housing societies, corporate offices and municipal corporations managing public places. However, several additional technology applications may be further developed by simply altering the training dataset. 

        Considering the significance of waste management, particularly in the medical sector, and the urgent need to preserve the environment, the waste management market in India is expected to reach USD 15 billion by 2025, growing at around 7% annually.

        As a result of the inevitable requirement for monitoring and maintenance services, the product is priced at the B2B industry level, with bigger purchases qualifying for volume discounts. TechiEco Solutions Pvt. Ltd. intends to advertise its goods digitally and at industry trade events.

        TechiEco Solutions Pvt. Ltd. is pre-launch currently, and the product is in the hardware prototype stage. This startup was founded by Aditya Milind Mate, Harshiq Gandhi and Hardik Sharma.
        </p>
      </section>
      
     
      <section>
      <div className="title-container" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' ,alignItems: 'center' }}>
        <h2>Get in Touch</h2>
        <img src={contact} alt="Your Image" style={{ marginLeft: '20px', width: '50px', height: '50px' }} />
      </div>
        
        <p>Have questions or need assistance? Our dedicated support team is here to help. Contact us via <a href="mailto:contact@yourcompany.com"> techiecos@gmail.com</a> or visit our <a href="/contact">Contact Us</a> page for more options.</p>
      </section>
      <section>
      <div className="title-container" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' ,alignItems: 'center' }}>
          <h2>Join Us for a <span style={{ color: 'green' }}>Greener</span> Tomorrow</h2>    
          <img src={eco} alt="Your Image" style={{ marginLeft: '20px', width: '50px', height: '50px' }} />
      </div>
       
        <p>Embark on a journey to financial empowerment with TechieEco. Join us today and experience a new era of seamless, secure, and rewarding financial management. <a href="/signup">Sign Up Now</a></p>
      </section>
    </div>
  );
};

export default AboutUsPage;
