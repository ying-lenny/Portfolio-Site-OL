import React from "react";

export default function ProjectSection() {
  return (
    <div className="project-section">
      <h2>Overview</h2>
			{/* Websites */}
      <div className="project-grid">
        <h3>Big Projects</h3>
        <div className="tiles">
          <div className="big-project">
            <figure className="project-container">
              <img src={require("../Assets/PortFoliGoTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>PortFoliGo</h1>
								<p>
									JavaScript fullstack Final year project using the MERN stack
								</p>
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
								<p>
									Irish-based welding equipment supplier
								</p>
                <button className="button is-primary">
                  <a href="https://egeplast.ie/">Visit Website</a>
                </button>
              </figcaption>
            </figure>
          </div>
					<div className="big-project">
            <figure className="project-container">
              <img src={require("../Assets/EOTMTEMP.png")} alt="Port" />
              <figcaption className="container-caption">
                <h1>Employee of the Month</h1>
								<p>
									PSX-styled survival horror experience
								</p>
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
                <h2>Calculator</h2>
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
                <h2>Rock, Paper, <br/> Scissors!</h2>
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
                <h2>TicTacToe</h2>
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
                <h2>Etch-a-Sketch</h2>
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
