import React from "react";
import { Link } from "react-router-dom";


export default function BigProjectButtons(props) {
  return (
    <div className="big-project-buttons">
      <a 
        className="big-project-button" 
        rel="noreferrer" 
        target="_blank" 
        href={props.link}
      >
          {props.text}
      </a>
      <div className="return-button">
        <Link  to='/Portfolio-Site-OL/'>&larr; Return to home</Link>
      </div>
    </div>
  )
}