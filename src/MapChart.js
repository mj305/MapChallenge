import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography, 
  Marker
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const markers = [
  { 
    markerOffset: 15, 
    name: "Colombia", 
    coordinates: [-74.0721, 4.711] 
  },
    ];

/* const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
}; */

const MapChart = ({ setTooltipContent }) => {
  const [country, setCountry] = useState({
    hits: {
      hits: []
    }
  });

  const CORSURL = "https://cors-anywhere.herokuapp.com/";

  const fetchCountry = () => {
    fetch(CORSURL + `http://egollas.com/api.json`)
    .then(response => response.json())
    .then(data => setCountry(data))
    .catch(error => console.log('Error: ', error))
  }
  console.log(country)



  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  /* onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }} */
                  style={{
                    default: {
                      fill: "#dbdbdb",
                      outline: "none"
                    },
                    hover: {
                      fill: "#979797",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (

              <Marker key={name} coordinates={coordinates}>
                
                <g
                  onMouseEnter = {() => { /* MAP ARRAY AND FETCH SPECIFIC DATA */
                    const { hits } = country.hits;
                    setTooltipContent(`${hits}`)              
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}

                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ 
                    fontFamily: "system-ui", 
                    fill: "#5D5A6D", 
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
