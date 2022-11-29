import Contact from '../components/Contact'
import Introduce from '../components/Introduce'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Social from '../components/Social'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Solutions from '../components/Solution'
import { TIMELINES } from '../stores/timelines'
import { SERVICES } from '../stores/services'
import { SOLUTIONS } from '../stores/solutions'
import { NAVIGATIONS } from '../stores/navigations'
import { useEffect, useState } from 'react'
import { useScrollspy } from '../helpers/useScrollspy'

const Home = () => {
  const activeId = useScrollspy(NAVIGATIONS, 500)
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <>
          <Header />
          <Sidebar navigations={NAVIGATIONS} activeId={activeId} />
          <Social />
          <div>
            <Introduce id="introduce" />
            <About id="about" timelines={TIMELINES} />
            <Services id="services" services={SERVICES} />
            <Projects id="projects" />
            <Solutions id="solutions" solutions={SOLUTIONS} />
            <Contact id="contact" />
          </div>
        </>
      )}
    </>
  )
}

export default Home
