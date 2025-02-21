import React from 'react';
import ProfilePic from "../assets/images/profilePhoto.svg";
import "../All_css/AboutSection.css";
import BlueButton from './ReusableCmp/BlueButton';
import WhiteButton from './ReusableCmp/WhiteButton';


const AboutSection = () => {
  return (
    <div id="AboutSection">
      <div className='AboutSecContainer'>
        <h1 className='secHeadingSize'>ABOUT ME</h1>
        <div className='AboutContentContainer'>
          <div>
          <p className='mb-[1.2rem]'>I am Skilled Full-Stack Web Developer. Recently completed B.Tech(Agricultural Engineering) from Swami Vivekanada university Sagar ,I am very passionate about improving my coding skills & developing modern websites. I am good at Full-Stack Web Development.As a passionate full-stack developer, I bring creativity and precision to every project. My dedication to staying abreast of the latest technologies ensures that I deliver modern , scalable and visually stunning websites that leave a lasting impression.</p>
          <WhiteButton name="Resume"/>
          </div>
          <img src={ProfilePic} alt="profile pic" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;