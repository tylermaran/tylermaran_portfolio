// Importing Dependencies
import React from 'react';

// Importing Components
import Header from '../components/Header'
import Project from '../components/Project';
import Footer from '../components/Footer';

// Importing Styling
import './Landing.css';

const Landing = () => {

    return (
        <div className="landing">
            <Header/>

            <hr className="line_break"/>

            <div className="left">
                <h3 className="sub_title">
                    Full Stack
                </h3>
                <Project/>
                <Project/>

                <h3 className="sub_title">
                    For fun
                </h3>
                <Project/>
                <Project/>
            </div>

            <div className="right">
                <h3 className="sub_title">
                    Front End
                </h3>
                <Project/>
                <Project/>

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