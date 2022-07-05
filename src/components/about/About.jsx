import React from 'react'
import './about.css'
import ME from '../../../src/assets/me_1.jpg'
import { FaSchool } from 'react-icons/fa'
import { GiArchiveResearch } from 'react-icons/gi'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaSchool className='about_icon' />
              <h5>College</h5>
              <small>IIIT Hyderabad <br /> 2019-2024 <br /></small>
              <small>B.Tech in Computer Science + MS by Research</small>
            </article>

            <article className='about__card'>
              <GiArchiveResearch className='about_icon' />
              <h5>Undergraduate Researcher</h5>
              <small>Robotics Research Center @ IIITH</small>
            </article>
          </div>
          <p>
            <br />
            Hello, it's me <br />
            Bhaskar Joshi <br />
            I study Computer Science  at <a href="https://www.iiit.ac.in/">IIIT Hyderabad</a>. <br />
            I enjoy Learning Something new everyday!! <br />
            

            <br />
          </p>
          <a href="#contact" className='btn btn-primary' >Find me Online</a>
        </div>
      </div>
    </section >
  )
}
