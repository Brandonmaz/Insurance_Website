import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/certification.png'
import IMG2 from '../../assets/certification.png'
import IMG3 from '../../assets/certification.png'

// map array for portfolio article items

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Work 1',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Work 2',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Work 3',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5>
      <h2>Portfolio</h2> */}
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            // return(
            //   <article key={id} className="portfolio__item">
            //     <div className="portfolio__item-image">
            //       <img src={image} alt={title} />
            //     </div>
            //       <h3>{title}</h3>
            //       <div className="portfolio__item-cta">
            //         <a href={github} className="btn btn-primary" rel='noreferrer' target='_blank'>Github</a>
            //         <a href={demo} className="btn btn-primary" rel='noreferrer' target='_blank'>Github</a>
            //       </div>
            //   </article>
            // )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio