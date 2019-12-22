import React from "react";
import "./Footer.css";

const Footer = ({ paletteName, emoji }) => {
  return (
    <footer>
      {paletteName} <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default Footer;
