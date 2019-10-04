// Importing Dependencies
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

// Importing Styling
import './Project.css';



const Project = (props) => {
	const [key, setKey] = useState('home');


	return (
		<div className="project_container">
			<div className="project_image">

			</div>
			<div className="project_tabs">
				<Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
					<Tab eventKey="home" title="Overview">
						<p>Overview</p>
					</Tab>
					<Tab eventKey="profile" title="Under the hood">
						<p>Under the hood</p>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
}

export default Project;