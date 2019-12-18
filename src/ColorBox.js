import React from "react";
import "./ColorBox.css";

const ColorBox = ({ background: { name, color } }) => {
  return (
    <div className="ColorBox" style={{ background: `${color}` }}>
      <div className="copy-container">
        <button className="copy-button" type="button">
          Copy
        </button>
        <div className="box-content">
          <span className="box-content-name">{name}</span>
          <span className="see-more">More</span>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
