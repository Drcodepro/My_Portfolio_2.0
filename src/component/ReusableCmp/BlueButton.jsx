import React from 'react';
import rightArrow from "../../assets/icons/rightArrow.svg";

const BlueButton = (prop) => {
  return (
    <button className="button blueGradiant" type="button">
      <span className="button__text whiteText">{prop.name}</span>
      <span  className="button__icon w-[41px] h-[100%]">
      <img src={rightArrow} alt="arrow" />
      </span>
        

    </button>
  );
};

export default BlueButton;