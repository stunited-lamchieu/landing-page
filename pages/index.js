import Image from "next/image";
import logo from "../images/logo.png";
import Contact from "../components/Contact";

const Home = () => {
  const navigations = [
    { name: "Home", href: "#scrollspyHeading1" },
    { name: "About", href: "#scrollspyHeading2" },
    { name: "Services", href: "#contact" },
  ];

  const removeDotStyles = () => {
    const navigation = document.querySelector("#js-dots");
    const dots = navigation;
    const is_active = dots.querySelector(".active");

    if (is_active != null) {
      is_active.classList.remove("active");
    }
  };

  const setDotStyles = (e) => {
    const navigation = document.querySelector("#js-dots");
    const dots = navigation.children;
    const dot = Object.values(dots);
    dot.map((item, index) => {
      if (item === e.target.parentElement) {
        removeDotStyles();
        item.classList.add("active");
      }
    });
  };

  return (
    <div
      className="container-fluid scrollspy-example  p-3 rounded-2 "
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      tabIndex="0"
    >
      <header className="header d-flex justify-content-between align-items-center">
        <div className="header__logo">
          <Image src={logo} alt="logo" layout="fill" />
        </div>
        <button className="header__contact">Contact Us</button>
      </header>
      <div className="row">
        <div className="col-2">
          <nav id="navbar-example2" className="navbar  px-3 mb-3 navigation">
            <ul id="js-dots" className="nav nav-pills" onClick={setDotStyles}>
              {navigations.map((item, index) => (
                <li key={index} className={index == 0 ? "active" : ""}>
                  <a className="nav-link" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-10">
          <div
           
          >
            <div id="scrollspyHeading1">First heading</div>
            <p>...</p>
            <div id="scrollspyHeading2">Second heading</div>
            <Contact id="contact" />
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
        defer
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
        defer
      ></script>
    </div>
  );
};

export default Home;
