import React from 'react'
import "./LandingPage.css"
import SectionOne from "../../Components/SectionOne/SectionOne"
import SectionTwo from "../../Components/SectionTwo/SectionTwo"
import SectionThree from "../../Components/SectionThree/SectionThree"
import Header from '../../Components/Header/Header'
import SmoothScroll from '../../Utils/SmoothScroll'
import SectionFour from '../../Components/SectionFour/SectionFour'



const LandingPage = () => {
  return (
    <SmoothScroll>
      <div className="landingpage-wrapper">
        <div className="social-networks">
          <p>Behance</p>
          <p>Linkedin</p>
        </div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </SmoothScroll>
  )
}

export default LandingPage