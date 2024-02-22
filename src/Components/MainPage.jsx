import About from './About'
import MainImage from './MainImage'
import TimetablePage from './Timetable'
import Contact from './Contact'
import Nav from './Nav'
import '../Styling/Nav.css'
import Nav2 from './Nav2'
import Quotes from './Quotes'

function MainPage() {
  return (
      <>
          <div id="nav">
          <Nav2/>
          </div>
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

export default MainPage
