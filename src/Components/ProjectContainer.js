import React from "react";
import { big_projects, small_projects } from '../data'
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
            <div>
                {smallProjects.map((small) => (
                    <SmallProjectCard project={small} key={small.id}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer;