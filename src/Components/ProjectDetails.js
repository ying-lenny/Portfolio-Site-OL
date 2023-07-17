import React from "react";

export default function ProjectDetails() {
	return (
		<div>
			<div className="project-details-container">
				<div className="project-details-image">
					<img src={require("../Assets/Calculator.PNG")} alt="Port" />
				</div>
				<div>
					<h1>Calculator</h1>
					<h2>Brief overview goes here</h2>
					<h3>Link to: repo | live site</h3>
				</div>
			</div>
		</div>
	)
}