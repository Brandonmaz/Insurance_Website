// install google icons
// npm i aos --save (animation on scroll)

import React, { useEffect } from 'react'
import Aos from 'aos'
import LOGO from '../../assets/farmers-logo.png'
import 'aos/dist/aos.css'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  useEffect(() => {
    Aos.init({duration: 2000, debounceDelay: 50, once: true});
  }, []);
  return (
    <section id="header">
      <header>
        <div className="container header__container">
            <h2><span>Farmers</span> Agency Producer</h2>
            <h1>Brandon Mazikowski</h1>
          <HeaderSocials/>
          {/* <div className="me">
            <img src={ME} alt="me" className="" />
          </div> */}
          <a href="#contact" className="scroll__down">Let's Talk<i className="arrow__down"></i><i className="arrow__down"></i><i className="arrow__down"></i></a>
        </div>
      </header>
    </section>
  )
}

export default Header