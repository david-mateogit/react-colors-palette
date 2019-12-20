import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Navbar.css";

const Navbar = ({ changeLevel, level }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">Color Picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={changeLevel}
            step={100}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
