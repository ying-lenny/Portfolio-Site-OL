import React from "react";
import { Link } from "react-router-dom";
import NightmodeToggle from "./NightModeToggle";

export default function Header() {
	return (
		<header className="header">
			<nav className="header-links">
				<div className="header-left">
					<Link to='/' >Owen Lenihan</Link>
					<NightmodeToggle/>
				</div>
				<div className="header-right">
					<ul>
						<li>
							<Link to='/'>Work</Link>
						</li>
						<li>
							<Link to='/PortFoliGo'>PFG</Link>
						</li>
						<li>
							<Link to='/Employee-of-The-Month'>EOTM</Link>
						</li>
						<li>
							<Link to='/Egeplast-Ireland'>EGE</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}