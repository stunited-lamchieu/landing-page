const Services = ({ id, services }) => (
  <div className="services section" id={id}>
    <div className="section__heading">
      <h2>
        WE <span>SERVICES</span>
      </h2>
    </div>
    <div className="services__container">
      {services.map((service, index) => {
        return (
          <div className="service" key={index}>
            <div>
              <div className="service__image">{service.icon}</div>
            </div>
            <div className="ps-3">
              <span className="service__title">{service.title}</span>
              <p className="service__desc">{service.content}</p>
            </div>
          </div>
        )
      })}
    </div>
    <div className="toast">
      Click <span className="here">here</span> to connect and hanggle us if this is that you need. Then you don't need
      to read the ending, below just "have a good day."
    </div>
  </div>
)

export default Services
