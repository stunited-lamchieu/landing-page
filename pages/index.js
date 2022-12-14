import Head from 'next/head'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Introduce from '../components/Introduce'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Social from '../components/Social'
import Solutions from '../components/Solution'
import { useScrollspy } from '../helpers/useScrollspy'
import { CUSTOMERS } from '../stores/customers'
import { FOOTER } from '../stores/footer'
import { NAVIGATIONS } from '../stores/navigations'
import { PROJECTS } from '../stores/projects'
import { SERVICES } from '../stores/services'
import { SOLUTIONS } from '../stores/solutions'
import { TIMELINES } from '../stores/timelines'

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
          <Head>
            <title>ST United &#45; United to grow up together</title>
            <link
              rel="shortcut icon"
              href="https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png"
            />
          </Head>
          <Header />
          <Sidebar navigations={NAVIGATIONS} activeId={activeId} />
          <Social />
          <div>
            <Introduce id="introduce" />
            <About id="about" timelines={TIMELINES} />
            <Services id="services" services={SERVICES} />
            <Projects id="projects" projects={PROJECTS} customers={CUSTOMERS} />
            <Solutions id="solutions" solutions={SOLUTIONS} />
            <Contact id="contact" footer={FOOTER} />
          </div>
        </>
      )}
    </>
  )
}

export default Home
