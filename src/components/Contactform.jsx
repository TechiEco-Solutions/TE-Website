import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { RiInstagramFill } from 'react-icons/ri';
import { IoMailOutline } from 'react-icons/io5';
import { TfiLocationPin } from 'react-icons/tfi';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUsCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // submission logic here
  };

  const labelStyle = {
    fontFamily: 'Inter Tight', 
    
    color: 'black', 
   
    fontSize: '1em', 
   
  };

  return (

    <div className='contact-heading'>
      <h2 >Contact Us</h2>
      <div className='para'>
        <p>Any questions or remarks? Just write a message to us</p>
        
      </div>
    <div className="contact-container">
      <div className="contact-details">
        <div className="text-contact">
          <h3 style={{ fontSize: '1.5em' }}>
            Techi<span style={{ color: 'green' }}>Eco</span>
          </h3>
        </div>
        <div className="info-box">
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IoMailOutline /> techiecos@gmail.com
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FiPhoneCall /> +91 9971732962
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TfiLocationPin style={{ flexShrink: 0 }} />
            N-84 S/CITY GURUGRAM SADAR BAZAR, GURGAON-122001, HARYANA
          </p>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com/techiEco_S" target='_blank' rel="noreferrer" className="social-link">
            <FaTwitter className="social" style={{ color: 'white' }} />
          </a>
          <a href="https://www.instagram.com/techieco_solutions/" target='_blank' rel="noreferrer" className="social-link">
            <RiInstagramFill className="social" style={{ color: 'white' }} />
          </a>
          <a href='https://www.linkedin.com/company/96943280/admin/feed/posts/' target='_blank' rel="noreferrer" className="social-link">
          <FaLinkedin className='social' style={{ color: "white" }} /></a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="single-line-input-container">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              fullWidth
              InputLabelProps={{ style: labelStyle }}
              style={{ marginBottom: '10px' }}
            />
          </div>

          <div className="single-line-input-container">
            <TextField
              id="email"
              label="Email"
              variant="standard"
              type="email"
              fullWidth
              InputLabelProps={{ style: labelStyle }}
              style={{ marginBottom: '10px' }}
            />
          </div>

          <div className="single-line-input-container">
            <TextField
              id="phone"
              label="Phone"
              variant="standard"
              type="tel"
              fullWidth
              InputLabelProps={{ style: labelStyle }}
              style={{ marginBottom: '10px' }}
            />
          </div>

          <div className="multi-line-input-container">
            <TextField
              id="message"
              label="Message"
              variant="standard"
              multiline
              rows={2}
              fullWidth
              InputLabelProps={{ style: labelStyle }}
              style={{ marginBottom: '10px' }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUsCard;

