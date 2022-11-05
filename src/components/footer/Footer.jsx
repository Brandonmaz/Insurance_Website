import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="https://agents.farmers.com/ca/milpitas/david-souza" rel="noreferrer" target="_blank" className='footer__logo'>Farmers Insurance<h6 style={{fontSize: ".75rem", color: "white"}}>Agency Owner</h6><h6 style={{fontSize: "1rem", color: "gray"}}>David M. Souza</h6></a>
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
          <a href="http://facebook.com"><AiOutlineFacebook className="footer__social-icon"/></a>
          <a href="http://instagram.com"><BsInstagram className="footer__social-icon"/></a>
          <a href="http://twitter.com"><FiTwitter className="footer__social-icon"/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; MazingWebsites. All rights reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer