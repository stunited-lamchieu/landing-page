import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { MAPS } from '../stores/maps'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Slider from 'react-slick'
import Image from 'next/image'

const Projects = ({ id, projects, customers }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
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
        {projects.map(({ name, coordinates, markerOffset }) => (
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
      <div className="customer">
        <div className="toast">
          Trusted by the
          <span className="here">
            <a href="#contact"> Clients &amp; Partners </a>
          </span>
        </div>
        <Slider id="customer" {...settings}>
          {customers.map((customer, index) => (
            <div className="customer__logo" key={index}>
              <a href={customer.href}>
                <Image src={customer.src} alt={customer.alt} width="100" height="100" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Projects
