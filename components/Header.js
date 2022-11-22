import Image from "next/image";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header px-4 d-flex justify-content-between align-items-center">
      <div className="header__logo">
        <Image src={logo} alt="logo" layout="fill" />
      </div>
      <button className="header__contact">Contact Us</button>
    </header>
  );
};

export default Header;