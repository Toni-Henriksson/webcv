import {React, useState, useEffect} from "react";
import '../css/components/templatecarousel.css';
const templatepng = require('../images/resume.png');

const TemplateCarousel = () => {
    const [templates, setTemplates] = useState([]);

    // Need to import all templates and set them to templates array here, then map in return to scrn.
    useEffect(() => {
      setTemplates()
    }, [])
    return (
        <>
        <div className="carousel-container"> 
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
        </div>
        </>
    );
}

export default TemplateCarousel;