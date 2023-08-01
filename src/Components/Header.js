import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<nav className="header-links">
				<div className="header-left">
					<Link to='/' >Owen Lenihan</Link>
				</div>
				<div className="header-right">
					<ul>
						<li>
							<Link to='/'>Work</Link>
						</li>
						<li>
							<Link to='/personal/0'>Page 2</Link>
						</li>
						<li>
							<Link to='/Employee-of-The-Month'>Page 3</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}