import React from "react";
import { big_projects, small_projects } from '../Assets/data'
import BigProjectCard from "./BigProjectCard";
import SmallProjectCard from "./SmallProjectCard";

function ProjectContainer() {
	const bigProjects = big_projects;
	const smallProjects = small_projects; 

	return (
		<div>
			<div>
				{bigProjects.map((big) => (
					<BigProjectCard project={big} key={big.id}/>
				))}
			</div>

			<div className="project-grid">
				<h3>JavaScript Projects</h3>
				<div className="tiles">
				{smallProjects.map((small) => (
					<SmallProjectCard project={small} key={small.id}/>
				))}
			</div>
		</div>
		</div>
	)
}

export default ProjectContainer;