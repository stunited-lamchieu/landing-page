import Image from "next/image";
import solution from "../images/solution.png";

const Solution = (props) => {
  const { id, solutions } = props;
  return (
    <div id={id} className="container-fluid">
      <h2 className="text-center header__title text-uppercase">
        OUR <span>SOLUTIONS</span>
      </h2>
      <div className="solution">
        <div className="solution__image">
          <Image src={solution} alt="solution" />
        </div>
        <div className="solution__content">
          {solutions.map((solution, index) => {
            return (
              <div key={index} className="content__main">
                <div className="content__icon">
                  <div>{solution.icon}</div>
                </div>
                <div>
                  <span className="font-weight-bold title">
                    {solution.title}
                  </span>
                  <p className="py-3">{solution.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solution;
