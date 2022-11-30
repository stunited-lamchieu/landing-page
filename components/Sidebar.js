const Sidebar = ({ navigations, activeId }) => (
  <nav className="navigations">
    <ul>
      {navigations.map((navigation) => (
        <li key={navigation} className={navigation === activeId ? 'active' : ''} >
          <a className={navigation === activeId ? 'active' : ''} href={`#${navigation}`}>
            <span></span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Sidebar
