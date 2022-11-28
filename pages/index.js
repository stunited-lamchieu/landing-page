import Contact from "../components/Contact";
import Introduce from "../components/Introduce";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Services from "../components/Services";
import { MdWebAsset } from "react-icons/md";
import { AiOutlineMobile, AiOutlineTeam } from "react-icons/ai";
import { SiBmcsoftware } from "react-icons/si";
import { MdOutlineCampaign } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import Map from "../components/Map";

const Home = () => {
  const navigations = [
    { name: "Home", href: "#introduce" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      icon: <MdWebAsset className="icon" />,
      title: "Web App Development",
      content:
        "We create beautifully designed web apps precisely tailored to your situationWe deliver web systems of any size and complexity — from budding startup products to hi-end enterprise solutions.",
    },
    {
      icon: <AiOutlineMobile className="icon" />,
      title: "Mobile App Development",
      content:
        "ST provides custom mobile application development across different platforms such as iOS and Android for consumer-facing and enterprise environment.",
    },
    {
      icon: <SiBmcsoftware className="icon" />,
      title: "Custom Software Development",
      content:
        "ST provides high quality, cost-effective and reliable software development services match your specific needs, budget and timeframe. We love to competes with other firms on the grounds of quality, creativity, n' dedication.",
    },
    {
      icon: <AiOutlineTeam className="icon" />,
      title: "Dedicated Team",
      content:
        "Looking for the best resources to compliment your existing team? Our talented developers are available to augment your team on a short or long term basis.",
    },
    {
      icon: <MdOutlineCampaign className="icon" />,
      title: "Digital Marketing",
      content:
        "From establishing your online presence to increasing your influence on social, we use smart analytics to help you grow your business.",
    },
    {
      icon: <BiBuildingHouse className="icon" />,
      title: "Startup Incubation",
      content:
        "Our program provides a vast resources for entrepreneurs in Vietnam, focusing on ecosystem building, co-working spaces and incubation programs",
    },
  ];

  return (
    <div
      className="scrollspy"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      tabIndex="0"
    >
      <Header />
      <Sidebar navigations={navigations} />
      <div>
        <Introduce id="introduce" className="section" />
        <About id="about" />
        <Services id="services" services={services} />
        <Map id="map" />
        <Contact id="contact" className="section" />
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
