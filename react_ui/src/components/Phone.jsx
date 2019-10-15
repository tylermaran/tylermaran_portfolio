// Importing Dependencies
import React from 'react';

// Importing Styles
import './Phone.css'

const Phone = (props) => {

    const style = {
		backgroundImage: 'url(' + props.image + ')'
	}

    return (
        <div className='phone'>
            <div className="phone_inner">
                <div className="phone_image" style={style}>
                    <div className="phone_glare"></div>
                </div>
            </div>
        </div>
    );

}

export default Phone;