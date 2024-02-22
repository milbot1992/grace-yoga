import { useParams } from 'react-router-dom';
import classData from '../assets/classData.json';
import { Link  } from "react-router-dom";
import '../Styling/SingleClass.css'

export default function SingleClass () {
  const { class_id } = useParams();
  const classItem = classData.find(item => item.class_id === parseInt(class_id));

  if (!classItem) {
    return <div>Class not found</div>;
  }

  return (
    <div>
      <div className='projects-page'>
        <div>
        <Link to="/" className="back-button">
              &laquo;
        </Link>
        </div>
        <img className='banner-image' src={classItem.img_url} alt={classItem.name} />
        <h1>{classItem.name}</h1>
        <p>Time: {classItem.time}</p>
        <p>Price: {classItem.price}</p>
        <h2>Description</h2>
        <p>{classItem.description1}</p>
        <p>{classItem.description2}</p>
        <p className='description3'>{classItem.description3}</p>
      </div>
    </div>
  );
}