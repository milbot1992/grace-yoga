import About from './Components/About'
import MainImage from './Components/MainImage'
import TimetablePage from './Components/Timetable'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import '../src/Styling/Nav.css'
import Nav2 from './Components/Nav2'
import Quotes from './Components/Quotes'

function App() {
  return (
      <>
          <Nav2/>
          <Nav/>
        <section class="parallax-container">
          <MainImage/>
        </section>
        <div id="about">
          <About/>
        </div>
        <div id="timetable">
          <TimetablePage/>
        </div>
        <div id="quotes">
          <Quotes/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </>
    )

}

export default App
