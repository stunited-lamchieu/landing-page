import Image from 'next/image'
import logo from '../images/logo.png'

const Header = () => (
  <header>
    <div className="header__logo">
      <Image src={logo} alt="ST United" layout="fill" />
    </div>
    <a href="#contact">
      <button className="header__contact">Contact Us </button>
    </a>
  </header>
)

export default Header
