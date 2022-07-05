// first i thought to make a testimonial but later i realised i dont need one rn so putting images in here
import React from 'react'
import './/testimonials.css'
import avt1 from '../../assets/with_friends_6.jpg'
import avt2 from '../../assets/with_friends_2.jpg'
import avt3 from '../../assets/with_friends_3.jpg'
import avt4 from '../../assets/with_friends_4.jpeg'
import avt5 from '../../assets/with_friends_5.jpeg'
import avt6 from '../../assets/with_friends.jpg'
import avt7 from '../../assets/with_friends_7.jpg'
import avt8 from '../../assets/with_friends_8.jpg'
import avt9 from '../../assets/with_family.jpg'
import avt10 from '../../assets/me_2.jpg'
import avt11 from '../../assets/me_3.jpeg'
import avt12 from '../../assets/me_4.jpeg'
import avt13 from '../../assets/me_6.jpg'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: avt1,
    name: '',
  },
  {
    avatar: avt2,
    name: '',
  },
  {
    avatar: avt3,
    name: '',
  },
  {
    avatar: avt4,
    name: '',
  },
  {
    avatar: avt5,
    name: '',
  },
  {
    avatar: avt6,
    name: '',
  },
  {
    avatar: avt7,
    name: '',
  },
  {
    avatar: avt8,
    name: '',
  },
  {
    avatar: avt9,
    name: '',
  },
  {
    avatar: avt10,
    name: '',
  },
  {
    avatar: avt11,
    name: '',
  },
  {
    avatar: avt12,
    name: '',
  },
  {
    avatar: avt13,
    name: '',
  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Photos</h5>
      <h2>My Photo Gallery</h2>
      <h5>Just Swipe L/R to see more...</h5>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          data.map(({ avatar, name }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} height='100%' width="50%" />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
