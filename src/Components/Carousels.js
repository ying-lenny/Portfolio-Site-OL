import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import images from "../Assets/images";

function CarouselEgeplast() {
  return (
    <div>
      <Carousel dynamicHeight={true} showIndicators={false}>
        {images.bigProjects.egeplast.slice(1).map((URL, index) => (
          <div>
            <img alt="image_test" src={URL} key={index}/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

function CarouselEOTM() {
  return (
    <div>
      <Carousel dynamicHeight={true} showIndicators={false}>
        {images.bigProjects.EOTM.slice(1).map((URL, index) => (
          <div>
            <img alt="image_test" src={URL} key={index}/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

function CarouselPortFoliGo() {
  return (
    <div>
      <Carousel dynamicHeight={true} showIndicators={false}>
        {images.bigProjects.PortFoliGo.slice(1).map((URL, index) => (
          <div>
            <img alt="image_test" src={URL} key={index}/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export { CarouselEgeplast, CarouselEOTM, CarouselPortFoliGo }