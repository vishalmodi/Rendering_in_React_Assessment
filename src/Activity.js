import React from "react";
import "./Activity.css";


function Activity({ time = "All Day", description = "" }) {
  return (
    <li className="activity">
      <p className="time">{time}<span>{description}</span></p>
    </li>
  );
}

export default Activity;
