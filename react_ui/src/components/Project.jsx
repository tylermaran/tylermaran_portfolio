// Importing Dependencies
import React from 'react';

// Importing Components
import Phone from './Phone';

// Importing Styling
import './Project.css';

const Project = (props) => {
	// const [key, setKey] = useState('home');
	const style = {
		backgroundImage: 'url(' + props.image + ')'
	}

	return (
		<div className="project_container">
			<div className="desktop_image">
				<div className="project_image" style={style}>
					<div className="phone_container">
						<Phone/>
					</div>
				</div>
			</div>
			
			<div className="project_detail">
				<div className="visit">
					<div className="link_logo"></div>
					<div className="site_link">Visit</div>
				</div>
				<div className="github">
					<div className="git_logo"></div>
					<div className="git_link">&#60;Code/&#62;</div>
				</div>
			</div>
			
		</div>
	);
}

export default Project;