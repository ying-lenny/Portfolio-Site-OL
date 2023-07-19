import { Link } from "react-router-dom";
import React from "react";

function SmallProjectCard(props) {
	const {
		project: { id, title, images },
	} = props;

	return (
			<div id={id} className="project">
				<figure className="project-container">
				<img src={images[0]} alt="Port" />
				<figcaption className="container-caption">
					<h2>{title}</h2>
					<button className="button is-primary">
						<Link key={id} to={`/personal/${id}`}>Learn More</Link>
					</button>
				</figcaption>
				</figure>
			</div>
	)
}

export default SmallProjectCard;