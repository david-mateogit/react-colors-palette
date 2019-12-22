import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";

const Navbar = ({ changeLevel, level, changeFormat }) => {
  const [openSnack, setOpenSnack] = React.useState(false);
  const [format, setFormat] = React.useState("hex");
  const firstUpdate = React.useRef(true);

  const handleChange = async e => {
    setFormat(e.target.value);
  };

  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setOpenSnack(true);
    changeFormat(format);
  }, [changeFormat, format]);

  const closeSnackbar = () => {
    setOpenSnack(false);
  };

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
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #FFF</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0) </MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openSnack}
        autoHideDuration={6000}
        message={<span id="message-id">Format Changed To {format.toUpperCase()} </span>}
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
};

export default Navbar;
