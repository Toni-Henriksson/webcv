import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../css/components/templatecarousel.css';
const templatepng = require('../images/resume.png');
const leftarrow = require('../images/left-arrow.png');
const righttarrow = require('../images/right-arrow.png');

const TemplateCarousel = () => {
    const [templates, setTemplates] = useState([]);

    // Need to import all templates and set them to templates array here, then map in return to scrn.
    useEffect(() => {
      setTemplates()
    }, [])
    return (
        <>
        <div className="carousel-container"> 
            <div className="carousel-nav">
                <button className="carousel-btn">
                    <img src={leftarrow} alt="Logo" width="80%" height={"100%"}></img> 
                </button>
            </div>
            <div className="carousel-content">
                <div className="template-card">
                    <img src={templatepng} alt="Logo" width="100%"></img>
                    <p className="card-text">Basic template</p>
                </div>
                <div className="template-card">
                    <img src={templatepng} alt="Logo" width="100%"></img>
                    <p className="card-text">Modern</p>
                </div>
                <div className="template-card">
                    <img src={templatepng} alt="Logo" width="100%"></img>
                    <p className="card-text">Simple</p>
                </div>
                <div className="template-card">
                    <img src={templatepng} alt="Logo" width="100%"></img>  
                    <p className="card-text">Retro</p> 
                </div>
            </div>
            <div className="carousel-nav">
                <button className="carousel-btn">
                    <img src={righttarrow} alt="Logo" width="80%" height={"100%"}></img>
                </button>
            </div>
        </div>
        </>
    );
}

export default TemplateCarousel;