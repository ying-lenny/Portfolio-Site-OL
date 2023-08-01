import React from "react";

export default function ContactSection() {
	return (
		<div className="contact-Section">
			<h2 className="section-heading">Contact Info</h2>
			<div className="section-body">
				<div className="contact-options">
					<div className="contact-linkedin">
						<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/owen-lenihan/"><img src={require("../Assets/Logos/LinkedIn.png")} alt="LinkedIn Logo"/></a>
					</div>
					<div className="contact-github">
						<a rel="noreferrer" target="_blank" href="https://github.com/ying-lenny"><img src={require("../Assets/Logos/Github.png")} alt="LinkedIn Logo"/></a>
					</div>
					<div className="contact-twitter">
						<a rel="noreferrer" target="_blank" href="https://www.twitter.com/Ying_Lenny"><img src={require("../Assets/Logos/Twitter.png")} alt="LinkedIn Logo"/></a>
					</div>
				</div>
			</div>
		</div>
	)
}


