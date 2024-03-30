import React from "react";
import Interest from "../Assets/InterestTemplate.png"

function ProjectPage() {
	return (
		<div className="interest-gallery">
			<h1>My Interests</h1>
			<div className="interest-gallery-content">
				<img src={Interest} alt="Interest Template"/>
				<h2>Typesetting</h2>
				<h2>3D Modelling</h2>
				<h2>Photoshop</h2>
				<h2>Others</h2>
			</div>
		</div>
	)
}

export default ProjectPage;