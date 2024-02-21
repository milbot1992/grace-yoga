import '../Styling/Timetable.css';
import classData from '../assets/classData.json';
import { Link } from 'react-router-dom';

export default function TimetablePage() {
  return (
    <div className='timetable'>
      <div className='timetable-section'>
        <h1 className='timetable-header'>Timetable</h1>

        {classData.map((classItem, index) => (
          <div key={classItem.class_id} className='day-container'>
            <h2 className='day-header'>{classItem.day}s</h2>
            <div className='class-card'>
              <div className='class-name-overlay'></div>
              <div className='class-content'>
                <img src={classItem.img_url} alt={classItem.name} className='class-image' />
                <div className='class-info'>
                  <h3 className='class-name'>{classItem.name}</h3>
                  <p className='class-time'>{classItem.location_short}</p>
                  <p className='class-time'>{classItem.time}</p>
                </div>
              </div>
            </div>
            {index !== classData.length - 1 && <hr className="pretty-line-break" />}
          </div>
        ))}
      </div>
    </div>
  );
}
