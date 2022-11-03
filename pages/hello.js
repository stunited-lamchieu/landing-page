import Image from "next/image";
import logo from "../assets/logo.png";

export const Hello = () => {
  return (
    <div className="hero">
      <div className="heading">
        <div class="grid"></div>
        <h1>
          <span>ST UNITED</span>
        </h1>
        <div class="waviy">
          <span>U</span>
          <span>n</span>
          <span>i</span>
          <span>t</span>
          <span>e</span>
          <span>d</span>
          &nbsp;
          <span>T</span>
          <span>o</span>
          &nbsp;
          <span>G</span>
          <span>r</span>
          <span>o</span>
          <span>w</span>
          &nbsp;
          <span>U</span>
          <span>p</span>
          &nbsp;
          <span>T</span>
          <span>o</span>
          <span>g</span>
          <span>e</span>
          <span>t</span>
          <span>h</span>
          <span>e</span>
          <span>r</span>
        </div>
      </div>
      <div className="shake">
        <div className="img_wrap">
          <div className="box_1"></div>
          <div className="box_2"></div>
          <div className="circle_1"></div>
          <div className="circle_2"> </div>
          <Image src={logo} alt="st_united" />
        </div>
      </div>
      <div className="social">
        <div>F</div>
        <div>In</div>
        <div>TW</div>
      </div>
    </div>
  );
};
