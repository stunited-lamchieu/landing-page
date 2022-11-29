import Image from 'next/image'
import logo1 from '../images/logo1.png'
import Typed from 'react-typed'
import { BsStar, BsStars, BsChevronDoubleDown } from 'react-icons/bs'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { MdModeEdit } from 'react-icons/md'

const Introduce = ({ id }) => (
  <div className="introduce" id={id}>
    <div className="grid"></div>
    <div className="section introduce__section">
      <div className="wrapper">
        <div className="heading">
          <h1>
            <span>ST UNITED</span>
          </h1>
          <Typed className="typed" strings={['United to grow up together...']} typeSpeed={30} backSpeed={50} loop />
          <div className="social">
            <Link href="#">
              <a target="_blank">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="#">
              <a target="_blank">
                <ImLinkedin2 />
              </a>
            </Link>
            <Link href="#">
              <a target="_blank">
                <MdModeEdit />
              </a>
            </Link>
          </div>
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
    </div>
  </div>
)

export default Introduce
