import React from "react";
import { CarouselEgeplast } from "./Carousels";
import BigProjectButtons from "./BigProjectButtons";

export default function Egeplast() {

  return (
    <div className="big-project-page">
      <h1 className="big-project-header">Egeplast Ireland Website redesign</h1>
      <div className="big-project-page-body">
        <div className="big-project-image-gallery">
          <CarouselEgeplast/>
        </div>
        <div className="big-project-description">
          <div className="big-project-inner-description">
            <h3>
              Creation of a new website for a local business
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
          </div> 
          <BigProjectButtons
            link = "https://egeplast.ie/"
            text ='Live Site'
          />
        </div>
      </div>
    </div>
  )
}