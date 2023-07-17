import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<nav className="header-links">
				<div className="header-left">
					<Link to='/' >Logo on da left</Link>
				</div>
				<div className="header-right">
					<ul>
						<li>
							<Link to='/' >Work</Link>
						</li>
						<li>
							<Link to='/page' >About</Link>
						</li>
						<li>
							<Link to='/' >Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}