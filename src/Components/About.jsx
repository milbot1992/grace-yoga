import React, { useRef, useState } from 'react';
import GraceSmile from '../assets/IMG_3709.jpeg'
import { useInView } from 'react-intersection-observer';
import '../Styling/About.css'
import animationData from '../assets/YogaPose.json'

export default function About() {


    return (
        <>
        <h2 className='about-header'>Freedom encapsulates your experience in a class with Grace. Freedom to move, freedom to explore, freedom to create, freedom to be.</h2>
        <div className='header-grid'>
            <div></div>
            <div className='image-container'>
                <img className='grace-smile' src={GraceSmile}></img>
            </div>
            <div>
                <div className='about-section'>
                    <h1>About Grace</h1>
                    <p className='about-me-text'>Hi, I'm Grace. I trained as a dancer when I was younger, so movement for me has always been a
                        treasured form of self expression. I like to bring a piece of that into my classes, a
                        sense of purpose in movement and that powerful feeling of being part of something
                        as a group when you're moving through the same dance but in different ways.</p>
                    <p className='about-me-text'>I
                        trained with Patrick Beach and Carling Harps in Awakening yoga which is a modern
                        expression of yoga that is more accessible for all body types. All my classes have a
                        mixture of old and new. There's a focus on self discovery, playfulness and trying new
                        things, in a safe space where there is no wrong or right.</p>
                </div>
            </div>
        </div>
        </>
    );
}


{/* <AirIcon className='icon' />
<p className='opening-text'>Movement Medicine</p>
<WbSunnyIcon className='icon' />
<p className='opening-text'>Awakening Yoga Teacher</p>
<SpaIcon className='icon' />
<p className='opening-text'>Mindfulness Facilitator</p>
<PublicIcon className='icon' />
<p className='opening-text'> Online + in-person classes</p> */}

//import AirIcon from '@mui/icons-material/Air';
//import WbSunnyIcon from '@mui/icons-material/WbSunny';
//import SpaIcon from '@mui/icons-material/Spa';
//import PublicIcon from '@mui/icons-material/Public';