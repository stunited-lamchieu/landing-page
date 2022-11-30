import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MAPS } from '../stores/maps'
import { PROJECTS } from '../stores/projects'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Projects = ({ id }) => (
  <div className="section projects" id={id}>
    <div className="section__heading">
      <h2>
        OUR <span>PROJECTS</span>
      </h2>
    </div>
    <div className="description">The projects we have been working on you can check, my engineer works :</div>
    <ComposableMap width={1200} height={550}>
      <Geographies geography={MAPS}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="rgba(255, 255, 255, 0.3)"
              stroke="rgba(0, 0, 0, 0.1)"
              className="geography"
            />
          ))
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
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <HiOutlineLocationMarker className="geography__icon" />
          </g>
          <text textAnchor="middle" y={markerOffset} className="abc" style={{ fontSize: '14px', fill: '#FFF' }}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  </div>
)

export default Projects
