import Contact from "../components/Contact";
import Introduce from "../components/Introduce";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Solution from "../components/Solution";
import Services from "../components/Services";
import map from "../images/map.svg";
import Image from "next/image";
import { AiOutlineMobile, AiOutlineTeam, AiOutlineHeart } from "react-icons/ai";
import { SiBmcsoftware, SiGoogleads } from "react-icons/si";
import { MdOutlineCampaign, MdOutlineLight, MdWebAsset } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { RiStore2Line } from "react-icons/ri";
import Script from "next/script";

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

  const solutions = [
    {
      icon: <AiOutlineHeart className="icon" />,
      title: "Loyalty",
      content:
        "A digital loyalty program allows consumers to interact with a business, receive rewards points or stamps with every purchase, use those collected points to redeem rewards such as discounted items and special offers.",
    },
    {
      icon: <MdOutlineLight className="icon" />,
      title: "Smartlighting",
      content:
        "Smart lighting is an advanced way to light the street by LoRaWan or NB IoT. Smart LED bulbs contain software that connects to web app, smart accessory so you can automate your lights or control them by app, eliminating the need for traditional wall switches.",
    },
    {
      icon: <RiStore2Line className="icon" />,
      title: "Smart retail",
      content:
        "Strategic partners in Smart Retail segment. Smart Retail is a solution for digital transformation of the retail industry, bringing a complete management solution and creating a lot of value for customers in business.",
    },
    {
      icon: <SiGoogleads className="icon" />,
      title: "DigiAds",
      content:
        "DiGiAds is a content management platform broadcast on public or corporate Digital Signage display systems, making it easy to create and manage digital content on digital signage.",
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
      <Image src={map} alt="React Logo" />
        <Introduce id="introduce" className="section" />
        <About id="about" />
        <Services id="services" services={services} />
        <Contact id="contact" className="section" />
        <Solution id="solution" className="section" solutions={solutions} />
      </div>

      <Script src="https://d3js.org/d3.v7.min.js"></Script>
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
