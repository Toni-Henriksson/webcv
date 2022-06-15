import './slider.css';

import { React, useState, useEffect, useRef  } from "react";
import WorkExperience from '../user-data-fragment/add-work-experience-widget/WorkExperience';
import AddEducationWidget from '../user-data-fragment/add-education-widget/AddEducationWidget';
import AddSkillsWidget from '../user-data-fragment/add-skills-widget/AddSkillsWidget';
import AddTextWidget from '../user-data-fragment/add-text-widget/AddTextWidget';
import AddLinksWidget from '../user-data-fragment/add-links-widget/AddLinksWidget';

const TOTAL_SLIDES = 4 // n-1 in Array

export const Slider = () => {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  
  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
    else setCurrent(current + 1)
  }
  
  const prev = () => {
    if ( current === 0 ) return
    else setCurrent(current - 1)
  }
  
  const desired = e => {
    setCurrent(Number(e.target.id))
  }
  
  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`
  }, [current])
  
  return (
    <>
    <div className='wrapper'>
      <p></p>
      <div className='frame'>
        <div className='box-container' ref={ref}>
          <div className='box'><WorkExperience></WorkExperience></div>
          <div className='box'><AddEducationWidget></AddEducationWidget></div>
          <div className='box'><AddSkillsWidget></AddSkillsWidget></div>
          <div className='box'><AddTextWidget></AddTextWidget></div>
          <div className='box'><AddLinksWidget></AddLinksWidget></div>
        </div>
      </div>
      <div className='button-container'>
        <div className='button' onClick={prev}>Left</div>
        <div className='button' onClick={next}>Right</div>
      </div>
      <div className='button-2-container'>
        {[0, 1, 2, 3, 4].map(num => (
          <div
            className={`button-2 ${num === current && 'active'}`}
            onClick={desired}
            id={num}
            key={num}
          />
        ))}
      </div>
    </div>
    </>
  );
}