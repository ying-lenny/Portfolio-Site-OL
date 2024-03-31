import React from "react";
import InterestType from "../Assets/InterestTemplateTypesetting.png"
import Interest3D from "../Assets/InterestTemplate3D.png"
import InterestPS from "../Assets/InterestTemplatePS.png"
import InterestOther from "../Assets/InterestTemplateOther.png"

function ProjectPage() {
	return (
		<div className="interest-gallery-section">
			<h1>My Interests</h1>
			<div className="interest-gallery-content">
				<div className="interest-options">
					<div className="interest-typesetting">
						<a href=""><img src={InterestType} alt="Interest Typesetting"/></a>
					</div>
					<div className="interest-3D">
						<a href=""><img src={Interest3D} alt="Interest 3D"/></a>
					</div>
					<div className="interest-ps">
						<a href=""><img src={InterestPS} alt="Interest PhotoShop"/></a>
					</div>
					<div className="interest-other">
						<a href=""><img src={InterestOther} alt="Interest Other"/></a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectPage;