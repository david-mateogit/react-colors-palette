import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "./ColorBox";

import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = React.useState(500);
  const colorBoxes = palette.colors[level].map(c => {
    return <ColorBox key={c.name} background={{ color: c.hex, name: c.name }} />;
  });

  const changeLevel = newLevel => {
    return setLevel(newLevel);
  };
  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        onAfterChange={changeLevel}
        step={100}
      />
      {/* Navbar goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};

export default Palette;
