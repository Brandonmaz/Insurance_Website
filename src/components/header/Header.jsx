// install google icons

import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/intro.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header__container">
          <h2 className="text-light">Brandon Mazikowski</h2>
          <h1>Farmers Insurance Agency Producer</h1>
          
          <CTA />
          <HeaderSocials/>
          {/* <div className="me">
            <img src={ME} alt="me" className="" />
          </div> */}
          {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
        </div>
      </header>
    </section>
  )
}

export default Header