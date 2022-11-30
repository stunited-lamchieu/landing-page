import Image from 'next/image'
import logo from '../images/logo.png'

const Header = () => (
  <header>
    <div className="header__logo">
      <Image src={logo} alt="logo" layout="fill" />
    </div>
    <button className="header__contact">Contact Us</button>
  </header>
)

export default Header
