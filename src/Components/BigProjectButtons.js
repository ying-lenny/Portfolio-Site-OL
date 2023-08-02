import React from "react";
import { Link } from "react-router-dom";


export default function BigProjectButtons(props) {
  return (
    <div className="egeplast-buttons">
      <a 
        className="egeplast-button" 
        rel="noreferrer" 
        target="_blank" 
        href={props.link}
      >
          {props.text}
      </a>
      <div className="return-button">
        <Link  to='/'>&larr; Return to home</Link>
      </div>
    </div>
  )
}