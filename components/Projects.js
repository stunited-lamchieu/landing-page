import Image from 'next/image'
import { useRef } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MAPS } from '../stores/maps'

const Projects = ({ id, projects, customers }) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const settings = {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    modules: [Navigation],
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
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
            <text textAnchor="middle" y={markerOffset} style={{ fontSize: '14px', fill: '#FFF' }} className="abc">
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
        <div className="swiper_button">
          <div ref={navigationPrevRef} className="swiper_prev">
            {' '}
            Prev
          </div>
          <div ref={navigationNextRef} className="swiper_next">
            {' '}
            Next
          </div>
        </div>
        <Swiper className="customer-swiper" {...settings}>
          {customers.map((customer, index) => (
            <SwiperSlide className="customer__logo" key={index}>
              <a href={customer.href}>
                <Image src={customer.src} alt={customer.alt} width="100" height="100" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
