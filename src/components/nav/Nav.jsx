import React, { useState, useEffect } from 'react'
import './nav.css'
import LOGO from '../../assets/farmers-logo.png'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookmark} from 'react-icons/gi'
import {TbHeartHandshake} from 'react-icons/tb'
import {FiPhoneCall} from 'react-icons/fi'

const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#')
  const[navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
}
window.addEventListener('scroll', changeBackground)
  
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}> 
      <div className="nav-wrapper">
          <ul id="menu">
            <li><a href="#" onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><span className="menu__words">home</span><span className="menu__icons"><AiOutlineHome/></span></a></li>
            <li><a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><span className="menu__words">about</span><span className="menu__icons"><AiOutlineUser/></span></a></li>
            <li><a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><span className="menu__words">services</span><span className="menu__icons"><TbHeartHandshake/></span></a></li>
            <li><a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><span className="menu__words">community</span><span className="menu__icons"><GiBookmark/></span></a></li>
            <li><a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span className="menu__words">contact</span><span className="menu__icons"><FiPhoneCall/></span></a></li>
            <div className="logo">
          <a href="https://www.farmers.com/" rel="noreferrer" target="_blank"><img src={LOGO} alt=""/></a>
        </div>
          </ul>
        </div>
        <div className="nav-wrapper">
          <ul className="contact__menu">
            <li className="contact__menu-info  number">1-408-857-1993</li>
            <li className="contact__menu-info"><a href="#contact">Let's Talk</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar