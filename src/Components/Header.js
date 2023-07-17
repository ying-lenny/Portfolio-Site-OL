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
                    <Link to='/' >Work on da right</Link>
                    <Link to='/page' >About on da right</Link>
                    <Link to='/' >Contact on da right</Link>
                </div>
            </nav>
        </header>
    )
}