import React, { useRef, useState } from 'react';
import GraceSmile from '../assets/IMG_3709.jpeg'
import { useInView } from 'react-intersection-observer';
import '../Styling/About.css'
import animationData from '../assets/YogaPose.json'

export default function About() {


    return (
        <>
        <h2 className='about-header-1'>Grace trained as an Awakening Yoga teacher in 2021. All of her classes are inspired
by the Awakening Yoga system from Patrick Beach and Carling Harps. Awakening
yoga is a modern expression of yoga. More accessible to different body types and
helping you to carve out space for exploration, mindfulness and fun! Grace’s classes
are a blend of old and new, traditional and modern, with a focus on mobility and
functional movement.</h2>
        <h2 className='about-header-2'>Freedom encapsulates your experience in a class with Grace. Freedom to move, freedom to explore, freedom to create, freedom to be.</h2>
        <div className='header-grid'>
            <div></div>
            <div className='image-container'>
                <img className='grace-smile' src={GraceSmile}></img>
            </div>
            <div>
                <div className='about-section'>
                    <h1>About Grace</h1>
                    <p className='about-me-text'>I trained as a dancer when I was younger, so movement for me has always been a
treasured form of self-expression. I like to bring a piece of that into my classes, a
sense of purpose in movement and that powerful feeling of being part of something
as a group when you&#39;re moving through the same dance but in different ways. In my
classes we explore self-discovery, playfulness and trying new things, in a safe space
where there is no right or wrong, just what feels good.</p>
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