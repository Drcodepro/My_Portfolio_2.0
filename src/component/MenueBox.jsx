import React, {useState } from 'react';
import '../All_css/MenueBox.css';
import profileImg from "../assets/icons/siteLogo.png";
import cupImg from "../assets/icons/cupicon.svg";
import aboutImg from "../assets/icons/abouticon.svg";
import skillImg from "../assets/icons/skillicon.svg";
import projectImg from "../assets/icons/projecticon.svg";
import contactImg from "../assets/icons/contacticon.svg";

import CancelMenue from "../assets/icons/CancelMenue.png";


const MenueBox = ({toggleMenu,isMenueOpen}) => {

  return (
    <div id='menueContainer' className={`sticky top-0 h-screen p-8 bg-black ${isMenueOpen?"slideMenueBox":""}`}>
        <div onClick={toggleMenu} className='CancelMuenue absolute z-10 w-[35px] top-[6px] right-[10px] hover:cursor-pointer'>
          <img src={CancelMenue} alt="menue_Button" />
        </div>

        <div id='ProfContainer'className='flex flex-col items-center gap-[0.5rem] mb-[2rem]'>
            <img src={profileImg} alt="Profile Picture" className='ProfPic w-[8rem]'/>
            <p className='ProfName w-fit text-white font-semibold whitespace-nowrap' >DHANENDRA RAHANGDALE</p>
            <p className='ProfRole w-fit px-[10px] py-[2px] font-semibold border-purple-500 border-[1px] rounded-full'><span className='text-white'>Full</span>-Stack Developer</p>
        </div>

        <nav id='menue_Nav_Container' className='flex flex-col gap-[1rem]'>
          <a><img src={cupImg} alt="" /> <p>Home</p> </a>
          <a><img src={aboutImg} alt="" /> <p>About</p> </a>
          <a><img src={skillImg} alt="" /> <p>Skills</p> </a>
          <a><img src={projectImg} alt="" /> <p>My Work</p> </a>
          <a><img src={contactImg} alt="" /> <p>Contact</p> </a>
        </nav>
    </div>
  );
};

export default MenueBox;