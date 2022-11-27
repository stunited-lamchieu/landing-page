const About = (props) => {
  const { id } = props;

  const timelines = [
    {
      year: 2017,
      content: `Admittedly WE have failures. ST was first formed in 2017 from a small office, that year we only had the enthusiasm of our youth, and also had a few small projects, especially GIT START. After that being young, WE began to have arguments, different orientations, WE had to separate into “ME”`,
    },
    {
      year: 2019,
      content: `2019 once again "ME" became "WE", also young but different, this time WE have the same vision, the same purpose. WE have grown from 20 employees to 40 key employees, working together on typical projects like QANH STARTUP. At the beginning of 2020, WE expanded the market to Europe, and have co-operated with OHO FRANCE`,
    },
    {
      year: `2020-2021`,
      content: `2021 establishes a Dev-Plus course to train all skills that are not learned in school and provide the best DEVPER for PREODER businesses that have signed MOUs.`,
    },
    {
      year: 2022,
      content: `2022 ST TECH HOUSE established with more than 50 good engineers, full stack. Invest in VIoT solutions, deploy Trung Nam smart city project.`,
    },
    {
      year: 2023,
      content: `"YOU" are our challenge`,
    },
  ];

  const slideNumber = Math.ceil(timelines.length / 4);

  const renderCarousel = (index) => {
    return (
      <div key={index} className={`carousel-item ${index === 0 && "active"}`}>
        {renderTimeline(index)}
      </div>
    );
  };

  const renderTimeline = (index) => {
    return (
      <div className="timeline">
        {timelines.slice(index * 4, index * 4 + 4).map((timeline, index) => (
          <div className="wrapper" key={index}>
            <div className="date">{timeline.year}</div>
            <div className="content">
              <p className="text-white">{timeline.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-fluid about-container" id={id}>
      <h2 className="text-center title text-uppercase">
        <span>ABOUT</span> US
      </h2>
      {slideNumber <= 1 ? (
        renderTimeline(0)
      ) : (
        <div
          id="timeline"
          className="carousel slide vertical"
          data-bs-ride="false"
          data-bs-wrap="false"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {[...Array(slideNumber).keys()].map((index) =>
              renderCarousel(index)
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#timeline"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#timeline"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
