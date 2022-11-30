const capitalize = (text) => text.charAt(0).toUpperCase() + text.substr(1)

const Sidebar = ({ navigations, activeId }) => (
  <nav className="navigations">
    <ul>
      {navigations.map((navigation, index) => (
        <li key={index} className={navigation === activeId ? 'active' : ''} href={`#${navigation}`}>
          <a className={navigation === activeId ? 'active' : ''} href={`#${navigation}`}></a>
          <span></span>
        </li>
      ))}
    </ul>
  </nav>
)

export default Sidebar
