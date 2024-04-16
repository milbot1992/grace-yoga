import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/RetreatSection.css';
import RetreatMain from '../assets/RetreatMain.jpeg';

export default function RetreatSection() {
    return (
        <div className='retreat-section'>
            <div className='retreat-content'>
                <img src={RetreatMain} alt="Reset Retreat" className="retreat-image" />
                <div className='retreat-text'>
                    <h1>Reset Retreat 2024</h1>
                    <p>Join me for a Reset Yoga Retreat in beautiful Archidona, Spain. This Yoga Retreat offers a blissful and relaxing 4-night getaway, where you'll immerse yourself in rejuvenating practices amidst the serene landscapes of southern Spain.</p>
                    <p>Thursday 19th - Monday 23rd September 4 Nights, 4 Days.</p>
                    <p className='button'>
                        <Link to="/retreat" className="find-out-more-button">
                            Click here to find out more
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
