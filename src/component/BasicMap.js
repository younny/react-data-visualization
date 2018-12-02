//@flow
import React from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"

type Props = {
  mapSource: Array<Object>,
  data: Array<Object>
}

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const BasicMap = (props: Props) => {
  const {
    mapSource,
    data
  } = props

  return (
    <div style={wrapperStyles}>
      <ComposableMap
        projectionConfig={{
          scale: 9000,
          rotation: [0,0,0],
          xOffset: -7200,
          yOffset: 1100
        }}
        width={980*0.8}
        height={1000}
        style={{
          width: "100%",
          height: "auto",
        }}
        >
        <ZoomableGroup center={[0,20]} disablePanning>
          <Geographies geography={mapSource}>
            {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
              <Geography
                key={i}
                geography={geography}
                projection={projection}
                style={{
                  default: {
                    fill: "#ECEFF1",
                    stroke: "#607D8B",
                    strokeWidth: 0.2,
                    outline: "none",
                  },
                  hover: {
                    fill: "#607D8B",
                    stroke: "#607D8B",
                    strokeWidth: 0.2,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    stroke: "#607D8B",
                    strokeWidth: 0.01,
                    outline: "none",
                  },
                }}
              />
            ))}
          </Geographies>
          <Markers>
            {data.map((s, i) => {
              return (
              <Marker
                key={i}
                marker={s}
                style={{
                  default: { fill: s.color },
                  hover: { fill: "#FF5722" },
                  pressed: { fill: "#FF5722" },
                }}
                >
                <circle
                  cx={0}
                  cy={0}
                  r={4}
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

export default BasicMap
