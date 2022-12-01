const Sidebar = ({ navigations, activeId }) => (
  <nav className="navigations">
    <ul>
      {navigations.map((navigation) => (
        <li key={`menu-item-${navigation}`}>
          <a
            className={navigation === (activeId !== '' ? activeId : navigations[0]) ? 'active' : ''}
            href={`#${navigation}`}
          >
            <span></span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)
export default Sidebar
