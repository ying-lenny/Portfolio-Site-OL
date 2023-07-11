import React from "react";
import "../Styles/Projects.css";

export default function ProjectSection() {
  return (
    <div className="project-section">
      <h2>My Work</h2>
			{/* Websites */}
      <div className="project-grid">
        <h3>Big Projects</h3>
        <div className="tiles">
          <div className="big-project">
            <figure className="project-container">
              <img src={require("../Assets/PortFoliGoTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>PortFoliGo</h1>
                <button className="button is-primary">
                  <span>Learn More</span>
                </button>
              </figcaption>
            </figure>
          </div>
          <div className="big-project">
            <figure className="project-container">
              <img src={require("../Assets/EgeplastTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>Egeplast Ireland</h1>
                <button href="https://egeplast.ie/" className="button is-primary">
                  <span>Visit Website</span>
                </button>
              </figcaption>
            </figure>
          </div>
					<div className="big-project">
            <figure className="project-container">
              <img src={require("../Assets/EOTMTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>Employee of the Month</h1>
                <button href="/#" className="button is-primary">
                  <span>Visit Website</span>
                </button>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
			{/* Personal Projects */}
			<div className="project-grid">
        <h3>JavaScript Projects</h3>
        <div className="tiles">
          <div className="project">
            <figure className="project-container">
              <img src={require("../Assets/PersonalTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>Calculator</h1>
                <button className="button is-primary">
                  <span>Learn More</span>
                </button>
              </figcaption>
            </figure>
          </div>
          <div className="project">
            <figure className="project-container">
						<img src={require("../Assets/PersonalTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>Rock, Paper, Scissors!</h1>
                <button className="button is-primary">
									<span>Learn More</span>
                </button>
              </figcaption>
            </figure>
          </div>
					<div className="project">
            <figure className="project-container">
              <img src={require("../Assets/PersonalTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>TicTacToe</h1>
                <button className="button is-primary">
                  <span>Learn More</span>
                </button>
              </figcaption>
            </figure>
          </div>
					<div className="project">
            <figure className="project-container">
              <img src={require("../Assets/PersonalTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>Etch-button-Sketch</h1>
                <button className="button is-primary">
                  <span>Learn More</span>
                </button>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
