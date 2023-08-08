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
					<div className="header-desktop">
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
					<div className="header-mobile">
						<ul className="menu-ul">
							<li className="menu">
								<p>[&#8801;]</p>
							<ul class="dropdown">
								<li>
									<Link to='/Portfolio-Site-OL/'>Work</Link>
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
							</li>
						</ul>	
					</div>
				</div>
			</nav>
		</header>
	)
}