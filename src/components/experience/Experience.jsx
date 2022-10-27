import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div data-aos="fade-right" className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>
         <p data-aos="fade-left" className="experience__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat pariatur id. Rem amet ducimus inventore unde quibusdam deleniti accusantium numquam neque, corporis modi saepe, magnam optio aut delectus ullam.
          </p>
        {/* box 1 experience */}

        {/* <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Skill</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div> */}
        {/* box 2 experience */}
        </div>
    </section>
  )
}

export default Experience