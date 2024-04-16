import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styling/Retreat.css";
import Retreat1 from '../assets/Retreat1.jpeg'
import Retreat2 from '../assets/Retreat2.jpeg'
import Retreat3 from '../assets/Retreat3.jpeg'
import Retreat4 from '../assets/Retreat4.jpeg'
import Retreat5 from '../assets/Retreat5.jpeg'
import RetreatMain from '../assets/RetreatMain.jpeg'

export default function YogaRetreat() {
  const photoArray = [
    Retreat1,
    Retreat2,
    Retreat3,
    Retreat4,
    Retreat5,
    "https://almohalla51.com/wp-content/uploads/2022/04/Sanctuary.jpg",
    "https://almohalla51.com/wp-content/uploads/2022/04/rooftop.jpg",
    "https://almohalla51.com/wp-content/uploads/2022/05/mainstreet.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="projects-page">
        <div>
          <Link to="/" className="back-button">
            &laquo;
          </Link>
        </div>
        <h1 className='header-title'>Reset Retreat</h1>
        <img className='header-image' src={RetreatMain} ></img>
        <div className="text-section">
          <p>
            Take this
            journey with me. Time to realign with our intentions for the new
            season ahead. A space to breathe, move, do less, do more,
            experience and explore; with me as your guide.
          </p>
        </div>
        
        
        <div>
            <h3>The Dates</h3>
            <p>Thursday 19th - Monday 23rd September 4 Nights, 4 Days. </p>
            <h3>The Accommodation</h3>
          <p>Almohalla 51</p>
          <p>C. Almohalla, 51, 29300 Archidona, Málaga, Spain</p>
          <p>
            Tucked away in the beautiful and historic Spanish town of
            Archidona, you will find Almohalla 51, a small, charming, boutique
            hotel. An idyll of peace, there is a swimming pool, shaded
            terraces and stunning sierra views with guaranteed sunsets! The
            hotel borders the wooded hillside that rises above the town of
            Archidona.
          </p>
          <br></br>
          <div className="carousel-container">
            <Slider {...settings}>
              {photoArray.map((photo, index) => (
                <div key={index}>
                  <img src={photo} alt={`Slide ${index}`} />
                </div>
              ))}
            </Slider>
          </div>
          <h3>The Location</h3>
          <p>Join this intimate 4-day retreat in a beautifully peaceful location in southern Spain.
              Archidona is a gorgeous town brimming with history, part of the delightful Andalucia.
              The beautiful Plaza Ochavada is a short walk away from the hotel, with plenty of
              local restaurants and bars. The hotel is perfectly located within easy reach of
              Antequera, Iznajar, Osuna and Comares; some spectacular and ancient towns
              waiting to be explored. Larger cities such as Granada, Cordoba, Sevilla and Ronda
              are all 1-2hours away.
          </p>
          <h3>The Food</h3>
          <p>Breakfast and evening meals are served on the patio, or in cooler months, around
            the communal dining table. The emphasis is on good quality locally sourced
            ingredients and deliciously healthy homemade meals. The menu is created to work
            around our yoga schedule and include Spanish and continental cuisine.
          </p>
          <h3>The Activities</h3>
          <p>In the day there will be options to be taken out to explore nearby ancient towns and
            villages before coming back to relax by the pool. Whether that’s exploring the roman
            ruins and historic castle in Antequera, visiting Iznajar lake or El Palo beach, there will
            be plenty of opportunity to discover and explore. Behind the hotel there is a stunning
            walk up through the pine forest to the Sanctuary at the top, a peaceful place for a
            quiet moment. There are plenty of routes for walking or running, with an endless
            vista of green rolling hills studded with perfect chequered lines of olive groves. After
            yoga, spend your evening relaxing and chatting, watching the sunset, swallows and
            bats.
          </p>
          <h3>The Yoga</h3>
          <p>Grace is a 200 hour Awakening Yoga teacher who likes to bring elements from lots
            of different practises into her classes. Practising amongst breathtaking views of the
            mountains, expect fluid and dynamic vinyasa flows, finding your inner rhythm and
            power. There will always be opportunities to do more or to do less in classes,
            depending on how you are feeling. Often there will be a sprinkle of mobility and
            functional movement to help build a foundation for your practise. In the evenings we
            will slow right down and find a restorative journey. Longer held deep stretches,
            opportunity for rest and dropping inwards, delivering you into the night feeling
            grounded, calm and connected. Breathwork and meditation will always be an offer to
            begin your day.
          </p>
          <br></br>
        </div>
        <div className="price-section">
          <h2>PRICES</h2>
          <h3>EARLY BIRD PRICES</h3>
          <p>Gain access to early bird prices by paying in full before 30th June 2024</p>
          <p>- Shared room £550</p>
          <p>- Single room £650</p>
          <br></br>
          <h3>STADARD PRICES</h3>
          <p>Standard prices come into effect if payment is made after 30th June 2024</p>
          <p>- Shared room £600</p>
          <p>- Single room £700</p>
          <br></br>
          <p>£150 deposit to secure your place now. Email hello@graceyoga.co.uk to reserve a spot.</p>
          <p>After that the full payment must be made no later than 1 month before the retreat (19th August)</p>
        <p>**Payment plans can be organised to suit your situation. We want this to be accessible for as many people as possible**</p>
        </div>
        <div class="included-section">
            <h2>WHAT IS INCLUDED IN THE PRICE?</h2>
            <ul>
                <li>- Transfer to and from Malaga airport</li>
                <li>- Breakfast and dinner included</li>
                <li>- X2 yoga sessions a day</li>
                <li>- Daily breathwork and meditation</li>
                <li>- Daytime Itinerary of activities, with transfers</li>
                <li>- 4 nights accommodation</li>
                <li>- Afternoon tea, coffee, cake</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
