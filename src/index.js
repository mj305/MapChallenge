import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <h1>Map Challenge</h1>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);