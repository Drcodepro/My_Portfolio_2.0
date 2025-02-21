import './App.css';
import MenueBox from './component/MenueBox';
import LandingPage from './component/LandingPage';
import OpenMenue from "./assets/icons/OpenMenue.png";
import { useEffect, useState } from 'react';
import AboutSection from './component/AboutSection';
import LineAnimation from './component/ReusableCmp/LineAnimation';

function App() {
  
const [isMenueOpen,setIsMenueOpen] = useState(true);

  const toggleMenu=()=>{
    setIsMenueOpen(prev=>!prev);
  };

  return (
    <div id="AppContainer">
        <div onClick={toggleMenu} className=' openMenueBTN absolute w-[35px] top-[6px] left-[10px] hover:cursor-pointer'>
          <img src={OpenMenue} alt="menue_Button" />
        </div>

      <MenueBox isMenueOpen={isMenueOpen} toggleMenu={toggleMenu}/>
      
      <div className='flex-1'>
        <LandingPage/>
        <LineAnimation/>
        <AboutSection/>
      </div>
        
    </div>
  )
}

export default App
