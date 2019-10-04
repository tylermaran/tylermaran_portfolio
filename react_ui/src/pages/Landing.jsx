// Importing Dependencies
import React from 'react';

// Importing Components
import Header from '../components/Header'
import Project from '../components/Project';
import Footer from '../components/Footer';

// Importing Styling
import './Landing.css';

import izac from '../images/izac_front.png';
import club from '../images/club_map.png';
import outspoke from '../images/outspoke.png';
import dwayne from '../images/dwayne.png';
import cadl from '../images/cadl.png';

const Landing = () => {

    return (
        <div className="landing">
            <Header/>

            <div className="left">
                <h3 className="sub_title">
                    Full Stack
                </h3>
                <Project image={cadl}/>
                <Project image={club}/>

                <h3 className="sub_title">
                    For fun
                </h3>
                <Project image={izac}/>
                <Project/>
            </div>

            <div className="right">
                <h3 className="sub_title">
                    Front End
                </h3>
                <Project image={outspoke}/>
                <Project image={dwayne}/>

                <h3 className="sub_title">
                    Serverless
                </h3>
                <Project/>
                <Project/>
            </div>

            


            <Footer/>


        </div>
    )

}

export default Landing;