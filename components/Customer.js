import Slider from 'react-slick'
import Image from 'next/image'

const Customer = ({ id, customers }) => {
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
    <div className="customer section" id={id}>
      <div className="section__heading">
        <h2>
          TRUSTED BY THE <span>Clients &amp; Partners</span>
        </h2>
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
  )
}

export default Customer
