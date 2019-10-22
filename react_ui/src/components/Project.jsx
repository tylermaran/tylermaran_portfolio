// Importing Dependencies
import React from 'react';

// Importing Components
import Phone from './Phone';

// Importing Styling
import './Project.css';

const Project = (props) => {
	const style = {
		backgroundImage: 'url(' + props.project.desktop_image + ')'
	}

	return (
		<div className="project">
			<div className="desktop_image" onClick={() => props.function(props.project)}>
				<div className="project_image" style={style}>
					<div className="phone_container">
						<Phone image={props.project.mobile_image}/>
					</div>
				</div>
				<div className="project_name">{props.project.name}</div>
			</div>
			
			<div className="project_detail">
				<div className="visit">
					<div className="link_logo"></div>
					<a href={props.project.url} target='new'><div className="site_link">Visit</div></a>
				</div>
				<div className="github">
					<div className="git_logo"></div>
					<a href={props.project.git_link} target='new'><div className="git_link">&#60;Code/&#62;</div></a>
				</div>
			</div>
		</div>
	);
}

export default Project;