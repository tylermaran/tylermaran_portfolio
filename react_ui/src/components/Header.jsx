// Importing Dependencies
import React from 'react';

// Importing Styling
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <h1 className="my_name">Tyler Maran:</h1>
            <h2 className="subtext">I build things</h2>
            <div className="github_profile"><a target="new" href="https://github.com/tylermaran"><span className="git_logo"></span></a></div>
            <div className="linkedin_portfolio"><a target="new" href="https://github.com/tylermaran"><span className="linkedin_logo"></span></a></div>
            <hr className="line_break"/>

        </div>
    )
}

export default Header;