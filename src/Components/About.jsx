import React, { useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import '../Styling/About.css'
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SpaIcon from '@mui/icons-material/Spa';
import PublicIcon from '@mui/icons-material/Public';
import animationData from '../assets/YogaPose.json'

export default function About() {
    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const lottieOptions = {
        loop: true,
        autoplay: isInView,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
        <h2 className='about-header'>Saorsa yoga provides a friendly and relaxed space for anyone to experience the transformative power of yoga.</h2>
        <div className='header-grid'>
            <div></div>
            <div ref={ref} className='header-image'>
                <Lottie options={lottieOptions} />
            </div>
            <div>
                <div className='opening-grid'>
                    <AirIcon className='icon' />
                    <p className='opening-text'>Movement Medicine</p>
                    <WbSunnyIcon className='icon' />
                    <p className='opening-text'>Awakening Yoga Teacher</p>
                    <SpaIcon className='icon' />
                    <p className='opening-text'>Mindfulness Facilitator</p>
                    <PublicIcon className='icon' />
                    <p className='opening-text'> Online + in-person classes</p>
                </div>
            </div>
        </div>
        </>
    );
}