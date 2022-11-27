import Image from "next/image";
import logo1 from "../images/logo1.png";
import { BsStar, BsStars, BsChevronDoubleDown } from "react-icons/bs";

const Introduce = (props) => {
  const { id } = props;
  return (
    <div id={id} className="hero">
      <div className="wrapper">
        <div className="heading">
          <div className="grid"></div>
          <h1>
            <span>ST UNITED</span> SAY &quot;HI&quot;
          </h1>
          <div className="sub__title">United to grow up together</div>
        </div>
      </div>
      <div className="shake">
        <div className="img_wrap">
          <div className="box_1"></div>
          <div className="box_2"></div>
          <div className="star">
            <BsStar />
          </div>
          <div className="small_star">
            <BsStars />
          </div>
          <Image src={logo1} alt="logo" layout="fill" />
        </div>
      </div>
      <div className="scroll_down">
        <BsChevronDoubleDown />
      </div>
    </div>
  );
};

export default Introduce;
