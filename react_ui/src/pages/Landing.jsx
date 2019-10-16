// Importing Dependencies
import React, {useState} from 'react';

// Importing Components
import Header from '../components/Header'
import Project from '../components/Project';
import Footer from '../components/Footer';
import About from '../components/About';

// Importing Styling
import './Landing.css';

import projectData from '../projects.json';

import izac from '../images/izac_front.png';
import club from '../images/club_map.png';
import outspoke from '../images/outspoke.png';
import dwayne from '../images/dwayne.png';
import cadl from '../images/cadl.png';
import phone from '../images/club_mobile.png';

const Landing = () => {

    const [featured, setFeatured] = useState(true);

    const map_projects = (project) => {
        return (
            <div className="project_container" key={project.name}>
                <Project image={project.desktop_image} phone_image={project.mobile_image}/>
            </div>
        );
    }

    let all_projects = projectData.map(map_projects);

    let projects = (
        <>
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

            <h3 className="sub_title">
                Front End
            </h3>
            <div className="project_container">
                <Project image={outspoke} phone_image={phone}/>
            </div>
            <div className="project_container">
                <Project image={dwayne} phone_image={phone}/>
            </div>
        </>
    )

    let all = (
        <>
            <h3 className="sub_title">
                All Projects
            </h3>
            {all_projects}
            
        </>
    )

    let featured_highlight = (
        <div className="switcher">
            <div className="featured_button" onClick={() => setFeatured(true)} style={{backgroundColor: "rgb(30,30,30)"}}>
                Featured
            </div>
            <div className="all_button" onClick={() => setFeatured(false)}>
                All Projects
            </div>
        </div>
    )

    let all_highlight = (
        <div className="switcher">
            <div className="featured_button" onClick={() => setFeatured(true)}>
                Featured
            </div>
            <div className="all_button" onClick={() => setFeatured(false)} style={{backgroundColor: "rgb(30,30,30)"}}>
                All Projects
            </div>
        </div>
    )

    return (
        <div className="landing">
            <Header/>
            <About/>
            <br/>
            
            {featured? featured_highlight: all_highlight}
            {featured? projects: all}            

            <Footer/>

        </div>
    )

}

export default Landing;