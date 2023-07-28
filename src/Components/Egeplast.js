import React from "react";
import CarouselTest from "./Carousel";

export default function Egeplast() {
  return (
    <div className="egeplast-page">
      <h1 className="egeplast-header">Egeplast Ireland Website redesign</h1>
      <div className="egeplast-page-body">
        <div className="egeplast-image-gallery">
          <CarouselTest/>
        </div>
        <div className="egeplast-description">
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
      </div>
    </div>
  )
}