import React from 'react';
import Link from './Link';
import profileImage from '../assets/jeff.jpg';
const Hero = () => {
  return (
    <section className="hero divider">
        <div className="image">
            <img src={profileImage} alt="Photo of Jeff" />
        </div>
        <div>
            <h1>Jeffrey Ayling</h1>
            <p>Web Designer / Developer</p>
            <p>Plymouth Meeting, PA</p>
            <Link href='#projects' className='btn'>Check out my work</Link>
        </div>
    </section>
  )
}

export default Hero