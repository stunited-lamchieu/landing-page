import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";

const Sidebar = ({ navigations }) => {
  return (
    <nav id="navbar-example2" className="navbar navigation">
      <ul className="nav nav-pills">
        {navigations.map((item, index) => (
          <li key={index} className={index == 0 ? "active" : ""}>
            <a className="nav-link" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="social">
        <Link href={"#"}>
          <a target="_blank">
            <FaFacebookF />
          </a>
        </Link>
        <Link href={"#"}>
          <a target="_blank">
            <ImLinkedin2 />
          </a>
        </Link>
        <Link href={"#"}>
          <a target="_blank">
            <MdModeEdit />
          </a>
        </Link>
      </div>
    </nav>
  );
};
export default Sidebar;
