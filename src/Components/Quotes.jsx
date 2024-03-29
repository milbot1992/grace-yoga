import React from 'react';
import '../Styling/Quotes.css';

export default function Quotes() {
    return (
        <div className = 'quotes-section'>
            <h1>Testimonials</h1>
            <div className="quotes-container">
                <div className="quote-card">
                    <p className="quote-text">"Coming to Grace's yoga classes every week has completely cured my shoulder issues. I have built a lot more strength and flexibility in this area and now experience no pain at all!"</p>
                    <p className="quote-author">Layla</p>
                </div>
                <div className="quote-card">
                    <p className="quote-text">"Grace's yoga classes are like a big warm hug and also the best release. I always feel amazing and brand new after them."</p>
                    <p className="quote-author">Millie</p>
                </div>
                <div className="quote-card">
                    <p className="quote-text">"I'd never done yoga before but Grace made it really accessible and is a fantastic teacher. My flexibility has improved so much, I've made lots of progress and I feel great!."</p>
                    <p className="quote-author">Robbie</p>
                </div>
            </div>
        </div>
    );
}
