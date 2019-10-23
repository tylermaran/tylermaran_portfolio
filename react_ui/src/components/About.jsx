// Importing Dependencies
import React from 'react';

// Importing Styles
import './About.css'

const About = (props) => {

    return (
        <div className='about'>
            <p className="about_p">Welcome to tylermaran.com! Featuring all things Tyler.</p>
            <p className="about_p">I live and work in San Francisco as a software developer, and hobbiest builder of just about anything. 
                Lately, I have been heavily involved in 3D design, and recently published and FOSS CAD Library.</p>
            <ul>
                <li>I received a BS in Economics from GSU, and began my career in M&amp;A Banking at CIBC US, before taking on additonal Computer Science education at GA Tech in 2018.</li>
                <li>I am the Treasurer of <a className="about_link" href="http://www.noisebridge.net" target="new">NoiseBridge Hackerspace</a>, a 501(c)(3) non profit facility that provides tools, equipment, and classes on everything from Network Security to Sewing.</li>
            </ul>
        </div>
    );
}

export default About;