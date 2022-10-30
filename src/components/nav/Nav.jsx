import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookmark} from 'react-icons/gi'
import {TbHeartHandshake} from 'react-icons/tb'
import {FiPhoneCall} from 'react-icons/fi'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav id="navbar" className=""> 
      <div className="nav-wrapper">
        {/* <div className="logo">
          <a href="#home"><i className="fas fas-chess-chess-knight">Logo</i></a>
        </div> */}
          <ul id="menu">
            <li><a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span className="menu__words">contact</span><span className="menu__icons"><FiPhoneCall/></span></a></li>
            <li><a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><span className="menu__words">services</span><span className="menu__icons"><TbHeartHandshake/></span></a></li>
            <li><a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><span className="menu__words">experience</span><span className="menu__icons"><GiBookmark/></span></a></li>
            <li><a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><span className="menu__words">about</span><span className="menu__icons"><AiOutlineUser/></span></a></li>
            <li><a href="#" onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><span className="menu__words">home</span><span className="menu__icons"><AiOutlineHome/></span></a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav