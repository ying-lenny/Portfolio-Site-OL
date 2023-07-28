import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import EgeplastHome from '../Assets/EgeplastHome.png'
import EgeplastMenu from '../Assets/EgeplastMenu.png'
import EgeplastPipe from '../Assets/EgeplastPipe.png'

export default function CarouselTest() {

  const images = [
    EgeplastHome,
    EgeplastMenu,
    EgeplastPipe
  ];

  return (
    <div>
      <Carousel dynamicHeight={true} showIndicators={false}>
        {images.map((URL, index) => (
          <div>
            <img alt="image_test" src={URL} key={index}/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}