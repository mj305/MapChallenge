import React, { useState } from 'react';

import ReactDOM from "react-dom";
/* import ReactTooltip from "react-tooltip"; */

import MapChart from "./MapChart";

import "./styles.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
    {/*   <ReactTooltip>{content}</ReactTooltip> */}
    </div>
  );
}

export default App;
