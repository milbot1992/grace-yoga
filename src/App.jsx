import About from './Components/About'
import MainImage from './Components/MainImage'
import CalendarPage from './Components/Calendar'
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
        <div id="calendar">
          <CalendarPage/>
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
