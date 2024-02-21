import React, { useRef, useState } from 'react';
import GraceSmile from '../assets/IMG_3709.jpeg'
import { useInView } from 'react-intersection-observer';
import '../Styling/About.css'
import animationData from '../assets/YogaPose.json'

export default function About() {


    return (
        <>
        <h2 className='about-header'>Yoga with Grace provides a friendly and relaxed space for anyone to experience the transformative power of yoga.</h2>
        <div className='header-grid'>
            <div></div>
            <div className='image-container'>
                <img className='grace-smile' src={GraceSmile}></img>
            </div>
            <div>
                <div className='about-section'>
                    <h1>About Grace</h1>
                    <p className='about-me-text'>Hi, I'm Grace - a Movement Medicine and Awakening Yoga Teacher, as well as a Mindfulness Facilitator. I have been teaching yoga for 5 years and provide high quality yoga practices to leave you feeling at ease.</p>
                    <p className='about-me-text'>I offer both online and in-person classes to help you on your journey to wellness and mindfulness.</p>
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