// Importing Dependencies
import React from 'react';

// Importing Styles
import './About.css';

const About = (props) => {
    return (
        <div className="about">
            <p className="about_p">
                Welcome to TylerMaran.com! Featuring all things Tyler.
            </p>
            <p className="about_p">
                I live and work in San Francisco as a software developer.{' '}
            </p>

            <p className="about_p">
                Actively building out a crowdfunding platform for open-source
                development:&nbsp;
                <a
                    className="about_link"
                    href="https://www.rysolv.com/"
                    target="new"
                >
                    rysolv.com
                </a>
            </p>
            <ul>
                <li>Completed numerous freelance web design projects.</li>
                <li>
                    2018 graduate of GA Tech's computer science certificate
                    program.
                </li>
                <li>B.S. in Economics from Georgia State University.</li>

                <li>
                    Treasurer of{' '}
                    <a
                        className="about_link"
                        href="http://www.noisebridge.net"
                        target="new"
                    >
                        NoiseBridge Hackerspace
                    </a>
                    . A 501(c)(3) non-profit that provides tools, equipment, and
                    classes on everything from network security to 3d printing.
                </li>
            </ul>
        </div>
    );
};

export default About;
