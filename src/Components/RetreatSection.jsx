import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/RetreatSection.css';

export default function RetreatSection() {
    return (
        <div className='retreat-section'>
            <h1>Reset Retreat 2024</h1>
            <p>
                <Link to="/retreat" className="find-out-more-button">
                    Click here to find out more
                </Link>
            </p>
        </div>
    );
}
