// Importing Dependencies
import React from 'react';

// Importing Styles
import './Footer.css'

const Footer = (props) => {

    return (
        <div className='footer'>
            <p>A footer!</p>
            <p>Because pages need these, right?</p>
            <div className="resume footer_resume">
                <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="new">[ Resume ]</a>
            </div>
            <div className="email footer_email">
                <a href="mailto: tyler.maran@gmail.com">[ tyler.maran@gmail.com ]</a>
            </div>
        </div>
    );

}

export default Footer;