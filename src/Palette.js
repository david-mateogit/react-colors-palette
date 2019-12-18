import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

const Palette = ({ seedColors }) => {
  const colorBoxes = seedColors.colors.map(c => {
    return <ColorBox key={c.name} background={{ color: c.color, name: c.name }} />;
  });

  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};

export default Palette;
