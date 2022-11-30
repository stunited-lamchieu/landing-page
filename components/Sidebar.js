const Sidebar = ({ navigations, activeId }) => (
  <nav className="navigations">
    <ul>
      {navigations.map((navigation) => (
        <li key={navigation} className={navigation === (activeId !== '' ? activeId : navigations[0]) ? 'active' : ''}>
          <a href={`#${navigation}`}>
            <span></span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Sidebar
