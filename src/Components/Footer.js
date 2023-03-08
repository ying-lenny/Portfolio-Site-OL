import React from "react";

export default function Footer() {

    let currentYear = new Date().getFullYear();

    return (
        <div className="navbar">
            <h2>This is where the Footer should be {currentYear}</h2>
        </div>
    )
}