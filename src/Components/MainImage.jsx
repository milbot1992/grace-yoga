import '../Styling/MainImage.css'
import Header from '../assets/GraceYoga.png'

export default function MainImage() {
    const handleLinkClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
          const offset = 150; 
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
          });
      }
  };

    return (
        <>
        <img src={Header} className='main-header'></img>
        <p className='main-image-subtitle'>Feel the transformative power of Awakening Yoga</p>
        <p className='main-image-cal-button' onClick={() => handleLinkClick('timetable')}>See Timetable</p>
      </>
    )
}