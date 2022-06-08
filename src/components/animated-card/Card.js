import React from "react";
import './card.css';
const resumepng = require('../../images/resume.png');

const Card = () => {
  return (
    <div className="card">
        <img src={resumepng} alt="Logo" ></img>
    </div>
  );
}

export default Card;