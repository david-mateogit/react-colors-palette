import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[1]));
  return (
    <div className="App">
      <Palette seedColors={seedColors[1]} />
    </div>
  );
}

export default App;
