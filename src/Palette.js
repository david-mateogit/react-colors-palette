import React from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";

import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = React.useState(500);
  const [format, setFormat] = React.useState("hex");
  const colorBoxes = palette.colors[level].map(c => {
    return <ColorBox key={c.name} background={{ color: c[format], name: c.name }} />;
  });

  const changeLevel = newLevel => {
    return setLevel(newLevel);
  };
  const changeFormat = val => {
    setFormat(val);
  };
  return (
    <div className="Palette">
      <Navbar changeLevel={changeLevel} level={level} changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};

export default Palette;
