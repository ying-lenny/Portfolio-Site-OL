import React from "react";

export default function Footer() {

	let currentYear = new Date().getFullYear();

	return (
		<div className="footer">
			<h2>@ {currentYear} Owen Lenihan</h2>
		</div>
	)
}