import React from 'react'
import './footer.css'
import LOGO from '../../assets/farmers-logo.png'
import {RiMessengerLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="https://www.farmers.com/california/" rel="noreferrer" target="_blank"className="farmers__logo"><img src={LOGO} alt="" /></a>
        <h6 style={{fontSize: ".75rem", color: "white"}}>Agency Owner</h6><a href="https://agents.farmers.com/ca/milpitas/david-souza" rel="noreferrer" target="_blank" className='footer__logo'><h6 className="owner__name">David M. Souza</h6></a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="experience">Experience</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="portfolio">Portfolio</a></li>
          <li><a href="testimonials">Testimonials</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <div className="footer__social">
          <a href="https://www.m.me/brandonmazikowski" rel="noreferrer" target="_blank"><RiMessengerLine className="footer__social-icon"/></a>
          <a href="https://www.instagram.com/brandonmazi/" rel="noreferrer" target="_blank"><BsInstagram className="footer__social-icon"/></a>
          <a href="https://twitter.com/BrandonMazi" rel="noreferrer" target="_blank"><FiTwitter className="footer__social-icon"/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; MazingWebsites. All rights reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer