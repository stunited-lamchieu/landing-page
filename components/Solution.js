const Solution = ({ id, solutions }) => {
  return (
    <div className="services section" id={id}>
      <div className="section__heading">
        <h2>
          OUR <span>SOLUTIONS</span>
        </h2>
      </div>
      <div className="solution">
        <div className="solution__container">
          {solutions.map((solution, index) => {
            return (
              <div key={index} className="content__main">
                <div className="content__icon">{solution.icon}</div>
                <span className="font-weight-bold title">{solution.title}</span>
                <p className="py-3">{solution.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Solution
