import React from "react";
import { CarouselEOTM } from "./Carousels";

export default function EOTM() {
  return (
    <div className="egeplast-page">
      <h1 className="egeplast-header">Employee of the Month</h1>
      <div className="egeplast-page-body">
        <div className="egeplast-image-gallery">
          <CarouselEOTM/>
        </div>
        <div className="egeplast-description">
          <h3>
            Designing UI, Graphic Design, and 3D Modelling
          </h3>
          <p>
            During my work placement at college, I was working with Egeplast Ireland Ltd, 
            a local supplier of welding equipment and training, to create a new website to 
            replace their outdated one which was not designed with mobile views in mind.
          </p>
          <p>
            The website was created using Wordpress and Elementor, with a combination 
            of CSS and HTML over the span of my 3 month work placement,
            taking input and feedback about the layout and presentation of necesary 
            information to the site like certificates and pipe fitting dimensions.
          </p>
          <p>
            The site from the perspective of phone screen was also an important consideration
            as typically the type of person to use the site could be either on-site somewhere
            from their phone which needed to be kept in mind through-out development.
          </p>
          <div className="egeplast-button">
							<a rel="noreferrer" target="_blank" href="https://store.steampowered.com/app/1957230/Employee_of_The_Month/">Live Site</a>
          </div>
        </div>
      </div>
    </div>
  )
}