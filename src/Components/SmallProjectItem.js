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
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>Link to: <a href={links[0]}>repo</a> | <a href={links[1]}>live site</a> </h3>
                <Link to='/contact'>Return</Link>
            </div>
        </div>
    )
}

export default SmallProjectItem;