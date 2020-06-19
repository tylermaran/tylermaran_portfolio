// Importing Dependencies
import React, { useState } from 'react';

// Importing Components
import Header from '../components/Header';
import Project from '../components/Project';
import Footer from '../components/Footer';
import About from '../components/About';
import Modal from '../components/Modal';

// Importing Styling
import './Landing.css';

// Importing JSON Data
import projectData from '../projects.json';

const Landing = () => {
    const [featured, setFeatured] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState('');

    const map_projects = (project) => {
        return (
            <div className="project_container" key={project.name}>
                <Project project={project} function={handle_modal} />
            </div>
        );
    };

    const handle_modal = (project) => {
        setModal(!modal);
        setModalData(project);

        document.body.style.overflow = 'hidden';
    };

    const close_modal = () => {
        document.body.style.overflow = 'auto';
        setModal(!modal);
        setModalData('');
    };

    let all_projects = projectData.map(map_projects);

    let projects = (
        <>
            <h3 className="sub_title">Full Stack</h3>
            <div className="project_container">
                <Project project={projectData[8]} function={handle_modal} />
            </div>
            <div className="project_container">
                <Project project={projectData[2]} function={handle_modal} />
            </div>

            <h3 className="sub_title">For fun</h3>
            <div className="project_container">
                <Project project={projectData[3]} function={handle_modal} />
            </div>
            <div className="project_container">
                <Project project={projectData[4]} function={handle_modal} />
            </div>

            <h3 className="sub_title">Front End</h3>
            <div className="project_container">
                <Project project={projectData[1]} function={handle_modal} />
            </div>
            <div className="project_container">
                <Project project={projectData[5]} function={handle_modal} />
            </div>
        </>
    );

    let all = (
        <>
            <h3 className="sub_title">All Projects</h3>
            {all_projects}
        </>
    );

    let featured_highlight = (
        <div className="switcher">
            <div
                className="featured_button"
                onClick={() => setFeatured(true)}
                style={{ backgroundColor: 'rgb(30,30,30)' }}
            >
                Featured
            </div>
            <div className="all_button" onClick={() => setFeatured(false)}>
                All Projects
            </div>
        </div>
    );

    let all_highlight = (
        <div className="switcher">
            <div className="featured_button" onClick={() => setFeatured(true)}>
                Featured
            </div>
            <div
                className="all_button"
                onClick={() => setFeatured(false)}
                style={{ backgroundColor: 'rgb(30,30,30)' }}
            >
                All Projects
            </div>
        </div>
    );

    return (
        <div className="landing">
            <Header />
            <About />
            <br />

            {featured ? featured_highlight : all_highlight}
            {featured ? projects : all}
            {modal ? (
                <Modal project={modalData} function={close_modal} />
            ) : (
                <></>
            )}

            <Footer />
        </div>
    );
};

export default Landing;
