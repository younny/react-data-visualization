import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"

const mapData = require("../south_korea.json")
const gpsData = require("../data/sample_1.json")

const numPatt = /[0-9]/g
const samples = gpsData.map((d) => {
  return {
    name: d.VEHICLE_NUM,
    coordinates: [d.GPS_LONG, d.GPS_LAT],
    color: '#'+d.VEHICLE_NUM.match(numPatt).reverse().join("")+"80" // transparency to 80
  }
})

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class BasicMap extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 9000,
            rotation: [0,0,0],
            xOffset: -7200,
  			    yOffset: 1100
          }}
          width={980}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={mapData}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.01,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.05,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.05,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
            <Markers>
              {samples.map((s, i) => {
                return (
                <Marker
                  key={i}
                  marker={s}
                  style={{
                    default: { fill: s.color },
                    hover: { fill: s.color },
                    pressed: { fill: "#FF5722" },
                  }}
                  >
                  <circle
                    cx={0}
                    cy={0}
                    r={5}
                    style={{
                      stroke: s.color,
                      strokeWidth: 3,
                      opacity: 0.9,
                    }}
                  />
                </Marker>)
              })}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default BasicMap
