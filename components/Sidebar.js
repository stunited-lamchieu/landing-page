const capitalize = (text) => text.charAt(0).toUpperCase() + text.substr(1)

const Sidebar = ({ navigations, activeId }) => (
  <nav className="navigations">
    <ul>
      {navigations.map((navigation) => (
        <li key={`menu-item-${navigation}`}>
          <a className={navigation === activeId ? 'active' : ''} href={`#${navigation}`}>
            {capitalize(navigation)}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Sidebar
