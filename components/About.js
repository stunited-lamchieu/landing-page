const About = (props) => {
  const { id } = props;

  const timelines = [
    {
      year: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo consequat.",
    },
    {
      year: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo consequat.",
    },
    {
      year: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo consequat.",
    },
    {
      year: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo consequat.",
    },
  ];

  const slideNumber = Math.ceil(timelines.length / 4);

  const renderCarousel = (index) => {
    return (
      <div key={index} class={`carousel-item ${index === 0 && "active"}`}>
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
              <p className="text-white text-end">{timeline.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id={id}>
      {slideNumber <= 4 ? (
        renderTimeline(0)
      ) : (
        <div
          id="timeline"
          class="carousel slide vertical"
          data-bs-ride="false"
          data-bs-wrap="false"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            {[...Array(slideNumber).keys()].map((index) =>
              renderCarousel(index)
            )}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#timeline"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#timeline"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
