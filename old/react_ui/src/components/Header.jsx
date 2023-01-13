// Importing Dependencies
import React from 'react';

// Importing Styling
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <h1 className="my_name">Tyler Maran:</h1>
            <h2 className="subtext">I build things</h2>
            <div className="links">
                <div className="github_profile"><a target="new" href="https://github.com/tylermaran"><span className="git_logo"></span></a></div>
                <div className="linkedin_portfolio"><a target="new" href="http://www.linkedin.com/in/tyler-maran"><span className="linkedin_logo"></span></a></div>
            </div>
            <hr className="line_break"/>
            <div className="resume">
                <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="new">[ Resume ]</a>
            </div>
            <div className="email">
                <a href="mailto: tyler.maran@gmail.com">[ tyler.maran@gmail.com ]</a>
            </div>
        </div>
    )
}

export default Header;