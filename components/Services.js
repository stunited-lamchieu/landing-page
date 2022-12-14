const Services = ({ id, services }) => (
  <div className="services section" id={id}>
    <div className="toast">
      Next, We don&apos;t want to waste your time, so we&apos;ll quickly summarize what services we do &quot;please
      scroll to the top&quot; just kidding.
    </div>
    <p className="services__start">Let&apos;s start</p>
    <div className="section__heading">
      <h2>
        OUR <span>SERVICES</span>
      </h2>
    </div>
    <div className="services__container">
      {services.map((service, index) => (
        <div className="services__card" key={index}>
          <div className="face face1">
            <p className="service__desc">{service.content}</p>
          </div>
          <div className="face face2">
            {service.icon}
            <span className="service__title">{service.title}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="toast">
      Click
      <span className="here">
        <a href="#contact"> here </a>
      </span>
      to connect and hanggle us if this is that you need. Then you don&apos;t need to read the ending, below just
      &quot;have a good day.&quot;
    </div>
  </div>
)

export default Services
