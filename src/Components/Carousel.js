import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import EgeplastHome from '../Assets/BigProjects/Egeplast/EgeplastHome.png'
import EgeplastMenu from '../Assets/BigProjects/Egeplast/EgeplastMenu.png'
import EgeplastPipe from '../Assets/BigProjects/Egeplast/EgeplastPipe.png'
import EgeplastCerts from '../Assets/BigProjects/Egeplast/EgeplastCerts.png'

export default function CarouselTest() {

  const images = [
    EgeplastHome,
    EgeplastMenu,
    EgeplastPipe,
    EgeplastCerts,
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