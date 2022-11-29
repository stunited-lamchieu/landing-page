const Sidebar = ({ navigations }) => (
  <nav id="navbar-example2" className="navbar navigation">
    <ul className="nav nav-pills">
      {navigations.map((item, index) => (
        <li key={index} className={index == 0 ? 'active' : ''}>
          <a className="nav-link" href={item.href}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Sidebar
