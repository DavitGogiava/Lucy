import React from 'react'
import "./SectionThree.css"
import ParralaxOne from '../ParralaxSections/ParralaxOne';

const SectionThree = () => {
  return (
    <div className="section-three-wrapper">



      <div className="big-text">
        <h1>If You Need Futurism</h1>
        <h2>I got it</h2>
      </div>
      <div className="big-text">
        <h1>If You Need Hellenism</h1>
        <h2>I got it</h2>
      </div>
      <div className="big-text">
        <h1>If You Need Minimalism</h1>
        <h2>I got it</h2>
      </div>
      <ParralaxOne />
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
    </div>
  )
}

export default SectionThree