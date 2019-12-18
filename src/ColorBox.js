import React from "react";
import "./ColorBox.css";

const ColorBox = ({ background }) => {
  return (
    <div className="ColorBox" style={{ background: `${background.color}` }}>
      <span>{background.name}</span>
    </div>
  );
};

export default ColorBox;
