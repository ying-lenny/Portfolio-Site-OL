import { Link } from "react-router-dom";

function SmallProjectItem( props ) {

	const {
		project: { id, title, description, images, links },
	} = props;

	return (
		<div id={id} className="project-details-container">
			<div className="project-details-image">
				<img src={images[1]} alt={title} />
			</div>
			<div className="project-details-description">
				<div className="inner-description">
					<h1>{title}</h1>
					<h2>{description}</h2>
					<div className="project-details-links">
						<a href={links[0]}>Repository</a>
						<a href={links[1]}>Live site</a> 
					</div>
					<div className="return-button">
						<Link  to='/'>View more</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SmallProjectItem;