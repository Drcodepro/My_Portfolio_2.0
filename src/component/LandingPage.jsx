import React from 'react';
import WhiteButton from './ReusableCmp/WhiteButton';
import BlueButton from './ReusableCmp/BlueButton';

import faceIcon from "../assets/icons/socialMedia/facebook.svg"
import instaIcon from "../assets/icons/socialMedia/insta.svg"
import linkedinIcon from "../assets/icons/socialMedia/linkedin.svg"
import telIcon from "../assets/icons/socialMedia/telegram.svg"
import twitIcon from "../assets/icons/socialMedia/twitter.svg"

const LandingPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-5 items-start'>
          <h1 className='headingSize'>Not Just a <span className='fontShed'>Developer</span>, <br />
          a <span className='fontShed'>Digital</span> Artist</h1>
    
          <p >I am a dedicated full-stack developer with <br /> a passion for crafting impactful digital experiences <br /> as a full stack developer.</p>
    
          <div className='flex gap-6'> <BlueButton name="LINKEDIN" /> <WhiteButton name="RESUME"/> </div>
    
          <div className='flex gap-3'>
            <img src={linkedinIcon} alt="Likedin Icon" className='hover:scale-115 transition-transform' />
            <img src={twitIcon} alt="Twitter Icon" className='hover:scale-115 transition-transform' />
            <img src={faceIcon} alt="Facebook Icon" className='hover:scale-115 transition-transform' />
            <img src={instaIcon} alt="Instagram Icon" className='hover:scale-115 transition-transform' />
            <img src={telIcon} alt="Telegram Icon" className='hover:scale-115 transition-transform' />
          </div>
    
        </div>
    </div>
  );
};

export default LandingPage;