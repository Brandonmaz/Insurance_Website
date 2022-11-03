import React from 'react'
import 'aos/dist/aos.css'
import './services.css'
import CAR from'../../assets/accident.jpeg'
import HOME from'../../assets/home.jpeg'
import {BiCheck} from 'react-icons/bi'
import {FaCarSide} from 'react-icons/fa'
import {GiHouse} from 'react-icons/gi'
import {FaUmbrella} from 'react-icons/fa'


const data = [
  {
    image: CAR,
    name: 'Auto',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    image: HOME,
    name: 'Home',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    image: CAR,
    name: 'Home',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    image: CAR,
    name: 'Home',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
]
const Services = () => {
  return (
    <section id="services">
      {/* <div className="container services__container">
      {
          data.map(({image, name, info}) => {
            return (
              <article data-aos="fade-down" className="service">
                  <img src={image} alt=""/>
                <div className="text">
                  <h1>{name}</h1>
                  <p>{info}</p>
                </div>
              </article>
            )
          })
        }
      </div> */}

      <div className="container services__container">
        <article data-aos="fade-down" className="service service__auto">
          <div className="text">
          <h1>Auto</h1>
          </div>
        </article>
        <article data-aos="fade-down" className="service service__home">
          <div className="text">
          <h1>Home</h1>
          </div>
        </article>
        <article data-aos="fade-down" className="service service__life">
          <div className="text">
          <h1>Life</h1>
          </div>
        </article>
        <article data-aos="fade-down" className="service service__umbrella">
          <div className="text">
          <h1>Umbrella</h1>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services