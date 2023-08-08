import React from "react";
import { CarouselPortFoliGo } from "./Carousels";
import BigProjectButtons from "./BigProjectButtons";

export default function PFG() {
  return (
    <div className="big-project-page">
      <h1 className="big-project-header">PortFoliGo</h1>
      <div className="big-project-page-body">
        <div className="big-project-image-gallery">
          <CarouselPortFoliGo/>
        </div>
        <div className="big-project-description">
          <h3>
            Designing and developing a web application
          </h3>
          <p>
            PortFoliGo was my college final year project in which I created a fullstack web application using JavaScript.
            It was created using the MERN stack, meaning it uses React for the frontend, and Express.js, Node.js, and MongoDB
            for the backend.
          </p>
          <p>
            PortFoliGo was created to be the one-stop solution for artists of most persuasions to quickly create an online portfolio
            instead of going through the hassle of either trying to create their own site, or rely on social media platforms
            that were not designed to be used by artists in a professional matter.
          </p>
          <p>
            Due to time restriction and issues during the development process, PortFoliGo was successfully deployed
            but you can still access the Github repo to see the frontend and server files.
          </p>
          <BigProjectButtons
            link = "https://github.com/ying-lenny/FYPRepo"
            text ='Github Repo'
          />
        </div>
      </div>
    </div>
  )
}