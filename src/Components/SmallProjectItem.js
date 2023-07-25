import { Link } from "react-router-dom";

function SmallProjectItem( props ) {

	const {
		project: { id, title, description, images, links },
	} = props;

	return (
		<div id={id} className="project-card-container">
			<div className="project-card-image">
				<img src={images[1]} alt={title} />
			</div>
			<div className="project-card-description">
				<div className="inner-description">
					<h1 className="project-card-title">{title}</h1>
					<h2>{description}</h2>
					<div className="project-card-buttons">
						<div className="project-card-links">
						<a href={links[0]}>Repository</a>
						<a href={links[1]}>Live site</a> 
					</div>
					<div className="return-button">
						<Link  to='/'>View Projects</Link>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SmallProjectItem;