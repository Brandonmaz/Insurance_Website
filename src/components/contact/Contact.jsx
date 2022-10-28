// npm install emailjs-com --save
import React, {useRef}from 'react'
import './contact.css'
import 'aos/dist/aos.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import {BsChatSquareText} from 'react-icons/bs'
// import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5u6f5p', 'template_w2q1sex', form.current, 'gbkVk-yZCxkQ5roj8')
    
    e.target.reset()
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div data-aos="fade-right" className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyemail@yahoo.com</h5>
            <a href="mailto: dummyemail@yahoo.com" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsChatSquareText className='contact__option-icon'/>{' '}-{' '}-{' '}-{' '}<FiPhoneCall className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>1234567890</h5>
            <a href="mailto: dummyemail@yahoo.com" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          {/* <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Name of Person</h5>
            <a href="https://m.me/nameofaccount" rel='noreferrer' target='_blank'>Send a message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Name of Person</h5>
            <a href="https://wa.me/14088571993" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form  className="form" data-aos="fade-left" ref={form} onSubmit={sendEmail}>
          <div className="table">
            <input type="text" name='first name' placeholder='First Name' required />
            <input type="text" name='last name' placeholder='Last Name' required />
          </div>
          <input type="email" name='email' placeholder='Email'/>
          <div className="table">
            <input type="text" name='company' placeholder='Company'/>
            <input type="text" name='phone' placeholder='Phone' required />
          </div>
          <select className="form__options" name="insurance" required>
            <option selected='true' disabled='disabled'>Choose Product Type</option>
            <option value="auto">Auto</option>
            <option value="home">Home</option>
            <option value="life">Life</option>
            <option value="umbrella">Umbrella</option>
          </select>
          <textarea className="textarea" type="message" name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary-cta'>GET MY ATTENTION<i className="arrow right"></i><i className="arrow right"></i><i className="arrow right"></i></button>
        </form>
      </div>
    </section>
  )
}

export default Contact