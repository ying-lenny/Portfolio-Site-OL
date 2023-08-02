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
            Employee of the Month is an atmospheric, retro-inspired, survival horror game 
            set during your first late night shift at the abstract supermarket chain "The Month"
            where every employee is an employee of the month.
          </p>
          <p>
            My involvement with the game was creating graphics used for the various endings that exist,
            dictacting the overall UI of the game, fonts, etc, along with 3D modelling for creating 
            some background assets that fit the retro aesthetic of the game
          </p>
          <p>
            The game has been offically published on several platforms including itch.io and steam
            and is currently available for purchase by following the link below
          </p>
          <div className="egeplast-button">
							<a rel="noreferrer" target="_blank" href="https://store.steampowered.com/app/1957230/Employee_of_The_Month/">Buy on steam</a>
          </div>
        </div>
      </div>
    </div>
  )
}