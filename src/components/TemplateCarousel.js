import {React, useState, useEffect} from "react";
import '../css/components/frontpage.css';
import { useNavigate } from "react-router-dom";
import '../css/components/templatecarousel.css';

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
                <button className="carousel-btn">x</button>
            </div>
            <div className="carousel-content">
                <div className="template-card">
                    <h1>1</h1>
                </div>
                <div className="template-card">
                    <h1>2</h1>
                </div>
                <div className="template-card">
                    <h1>3</h1>
                </div>
                <div className="template-card">
                    <h1>4</h1>
                </div>
            </div>
            <div className="carousel-nav">
                <button className="carousel-btn">x</button>
            </div>
        </div>
        </>
    );
}

export default TemplateCarousel;