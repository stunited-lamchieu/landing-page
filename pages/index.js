import Contact from '../components/Contact'
import Introduce from '../components/Introduce'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Social from '../components/Social'
import About from '../components/About'
import Services from '../components/Services'

import Map from '../components/Map'
import { TIMELINES } from '../stores/timelines'
import { SERVICES } from '../stores/services'
import { NAVIGATIONS } from '../stores/navigations'

const Home = () => {
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
      <Sidebar navigations={NAVIGATIONS} />
      <Social />
      <div>
        <Introduce id="introduce" />
        <About id="about" timelines={TIMELINES} />
        <Services id="services" services={SERVICES} />
        <Map id="map" />
        <Contact id="contact" />
      </div>
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
  )
}

export default Home
