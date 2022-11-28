const About = ({ id, timelines }) => (
  <div className="about section" id={id}>
    <div className="section__heading">
      <h2>
        <span>ABOUT</span> US
      </h2>
    </div>
    {timelines.map((timeline, index) => (
      <div className="wrapper" key={index}>
        <div className="date">{timeline.year}</div>
        <div className="content">
          <p>{timeline.content}</p>
        </div>
      </div>
    ))}
  </div>
)

export default About
