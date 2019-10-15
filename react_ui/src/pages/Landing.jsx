// Importing Dependencies
import React from 'react';

// Importing Components
import Header from '../components/Header'
import Project from '../components/Project';
import Footer from '../components/Footer';
import About from '../components/About';

// Importing Styling
import './Landing.css';

import izac from '../images/izac_front.png';
import club from '../images/club_map.png';
import outspoke from '../images/outspoke.png';
import dwayne from '../images/dwayne.png';
import cadl from '../images/cadl.png';
import phone from '../images/club_mobile.png';

const Landing = () => {

    return (
        <div className="landing">
            <Header/>
            <About/>
            {/* <div className="left"> */}
                <h3 className="sub_title">
                    Full Stack
                </h3>
                <div className="project_container">
                    <Project image={cadl} phone_image={phone}/>
                </div>
                <div className="project_container">
                    <Project image={club} phone_image={phone}/>
                </div>
                
                <h3 className="sub_title">
                    For fun
                </h3>
                <div className="project_container">
                    <Project image={izac} phone_image={phone}/>
                </div>
                <div className="project_container">
                    <Project image={club} phone_image={phone}/>
                </div>

            {/* </div> */}

            {/* <div className="right"> */}
                <h3 className="sub_title">
                    Front End
                </h3>
                <div className="project_container">

                <Project image={outspoke} phone_image={phone}/>
                </div>
                <div className="project_container">

                <Project image={dwayne} phone_image={phone}/>
                </div>

            {/* </div> */}

            <Footer/>

        </div>
    )

}

export default Landing;