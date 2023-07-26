import React from "react";
import { big_projects, small_projects } from '../Assets/data'
import BigProjectCard from "./BigProjectCard";
import SmallProjectCard from "./SmallProjectCard";

function ProjectContainer() {
	const bigProjects = big_projects;
	const smallProjects = small_projects; 

	return (
		<div>
			<div className="big-project-grid">
				<h3 className="project-grid-header">Big Projects</h3>
					<div className="tiles">
						{bigProjects.map((big) => (
							<BigProjectCard project={big} key={big.id}/>
						))}
				</div>
			</div>

			<div className="small-project-grid">
				<h3 className="project-grid-header">Personal Projects</h3>
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