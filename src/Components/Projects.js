import React from "react";
import '../Styles/Projects.css'

export default function ProjectSection() {
    return (
        <div className="project-section">
            <h3>My Work</h3>
            <div className="project-grid">
                <div className="tiles">
                    <div className="project">
                        <figure className="project-container">
                            <img src={require('../Assets/PortFoliGo-logo.png')} alt="Port"/>
                            <figcaption className="container-caption">
                                <h1>PortFoliGo</h1>
                                <a className="button is-primary">
                                    <span>Visit Website</span>
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="project">
                        <figure className="project-container">
                            <img src={require('../Assets/PortFoliGo-logo.png')} alt="Port"/>
                            <figcaption className="container-caption">
                                <h1>PortFoliGo</h1>
                                <a></a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="project">
                        <figure className="project-container">
                            <img src={require('../Assets/PortFoliGo-logo.png')} alt="Port"/>
                            <figcaption className="container-caption">
                                <h1>PortFoliGo</h1>
                                <a></a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}