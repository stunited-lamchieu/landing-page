import Image from 'next/image'
import logo from '../assets/logo.png'
import Typed from 'react-typed'
import Link from 'next/link'
import {
  BsFacebook,
  BsLinkedin,
  BsNewspaper,
  BsStar,
  BsStars,
  BsChevronDoubleDown,
} from 'react-icons/bs'

export const Hello = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="heading">
          <div class="grid"></div>
          <h1>
            <span>ST UNITED</span>
          </h1>
          <Typed
            className="typed"
            strings={['United to grow up together...']}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
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
          <Image src={logo} alt="st_united" />
        </div>
      </div>
      <div className="social">
        <Link href={'#'}>
          <a target="_blank">
            <BsFacebook />
          </a>
        </Link>
        <Link href={'#'}>
          <a target="_blank">
            <BsLinkedin />
          </a>
        </Link>
        <Link href={'#'}>
          <a target="_blank">
            <BsNewspaper />
          </a>
        </Link>
      </div>
      <div className="scroll_down">
        <BsChevronDoubleDown />
      </div>
    </div>
  )
}
