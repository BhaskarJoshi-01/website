import React from 'react'
import './experience.css'
import { BsPatchCheck } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Techs I've worked with!</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Projects</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>GrabCut</h4>
                <small><a href="https://github.com/BhaskarJoshi-01/Grabcut">Find it here!</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>JigSawPuzzle </h4>
                <small><a href="https://github.com/BhaskarJoshi-01/JigSawPuzzle">Find it here!</a></small>
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Raft</h4>
                <small><a href="https://github.com/BhaskarJoshi-01/Raft">Find it here!</a></small>
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Genetic Algorithm</h4>
                <small><a href="https://github.com/BhaskarJoshi-01/Genetic-Algorithm">Find it here!</a></small>
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Bhash</h4>
                <small><a href="https://github.com/BhaskarJoshi-01/bhash">Find it here!</a></small>
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Job Application Portal</h4>
                <small><a href="https://github.com/BhaskarJoshi-01/Job-Application-Portal">Find it here!</a></small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Major Courses</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Data Structures and Algorithm</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/Grabcut">Find it here!</a></small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Operating Systems </h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/JigSawPuzzle">Find it here!</a></small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Machine , Data and Learning</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/Raft">Find it here!</a></small> */}
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Computer Vision</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/Genetic-Algorithm">Find it here!</a></small> */}
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Statistical Methods in Artificial Intelligence</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/bhash">Find it here!</a></small> */}
              </div>
            </article><article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Design and Analysis of Software Systems</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/Job-Application-Portal">Find it here!</a></small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Mobile Robotics</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/Job-Application-Portal">Find it here!</a></small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icons' />
              <div>
                <h4>Distributed Systems</h4>
                {/* <small><a href="https://github.com/BhaskarJoshi-01/Job-Application-Portal">Find it here!</a></small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

