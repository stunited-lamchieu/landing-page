const Services = (props) => {
  const { id, services } = props;

  return (
    <div className="container-fluid" id={id}>
      <h2 className="text-center header__title text-uppercase">
        OUR <span>SERVICES</span>
      </h2>
      <div className="row">
        {services.map((service, index) => {
          return (
            <div className="col-md-4 pe-5 pt-5" key={index}>
              <div className="d-flex pe-5">
                <div>
                  <div className="icon-container">{service.icon}</div>
                </div>
                <div className="ps-3">
                  <span className="font-weight-bold title">
                    {service.title}
                  </span>
                  <p className="py-3">{service.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p>
        Click <span className="here">here</span> to connect and hanggle us if
        this is that you need. Then you don't need to read the ending, below
        just "have a good day."
      </p>
    </div>
  );
};

export default Services;
