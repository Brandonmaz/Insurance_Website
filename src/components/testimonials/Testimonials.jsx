// npm install swiper

import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/intro.png'
import AVTR2 from '../../assets/intro.png'
import AVTR3 from '../../assets/intro.png'
import AVTR4 from '../../assets/intro.png'
import AVTR5 from '../../assets/intro.png'
import AVTR6 from '../../assets/intro.png'
import {Pagination, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow"
import 'swiper/css/pagination';

// map array for testimonial article items
// keep max words to less than 60 and all characters to no more than 500
const data = [
  {
    avatar: AVTR1,
    name: 'Brandon Mazikowski',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    avatar: AVTR2,
    name: 'Brandon Mazikowski',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    avatar: AVTR3,
    name: 'Brandon Mazikowski',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    avatar: AVTR4,
    name: 'Brandon Mazikowski',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    avatar: AVTR5,
    name: 'Brandon Mazikowsk',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
  {
    avatar: AVTR6,
    name: 'Brandon Mazikowski',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam! Provident, quas sapiente? Inventore, a eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure architecto exercitationem voluptatum consectetur, iste unde corporis vero animi repellat quas explicabo beatae hic magnam!'
  },
]
const Testimonials = () => {
  return (
      <section id="testimonials">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94,
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper mySwiper"
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
 
  )
}

export default Testimonials