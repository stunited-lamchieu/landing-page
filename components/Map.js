import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MAPS } from '../stores/maps'
import { PROJECTS } from '../stores/projects'

const Map = ({ id }) => (
  <div className="section map" id={id}>
    <div className="section__heading">
      <h2>
        WE <span>PROJECTS</span>
      </h2>
    </div>
    <div className="description">
      The <span className="here">projects</span> we have been working on you can check, my engineer works :
    </div>
    <ComposableMap width="1200" height="500">
      <Geographies geography={MAPS}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#333" stroke="#222" />)
        }
      </Geographies>
      {PROJECTS.map(({ name, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          style={{
            default: {
              fill: '#D6D6DA',
              outline: 'none',
            },
            hover: {
              fill: '#F53',
              outline: 'none',
            },
            pressed: {
              fill: '#E42',
              outline: 'none',
            },
          }}
        >
          <g
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
            className="abc"
            // style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  </div>
)

export default Map
