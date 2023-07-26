import { Link } from "react-router-dom";
import React from "react";

function BigProjectCard(props) {
	const {
		project: { id, title, image, description },
	} = props;

	return (
		<div id={id} className="big-project">
			<figure className="project-container">
			  <img src={image} alt={title} />
			  <figcaption className="container-caption">
				<h1>{title}</h1>
					<p>
						{description}
					</p>
				<button className="button is-primary">
					<Link key={id} to={`/${title.replace(/\s/g, "-")}`}>Learn More</Link>
				</button>
			  </figcaption>
			</figure>
		  </div>
	)
}

export default BigProjectCard;