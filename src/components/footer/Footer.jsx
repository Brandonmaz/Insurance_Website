import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className='footer__logo'>Farmers Insurance</a>
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
          <a href="htto://facebook.com"><AiOutlineFacebook/></a>
          <a href="htto://instagram.com"><BsInstagram/></a>
          <a href="htto://twitter.com"><FiTwitter/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; MazingWebsites. All rights reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer