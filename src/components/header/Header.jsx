import React from 'react'
import './header.css'
import {CTA} from './CTA'
import ME7 from '../../assets/me_7.jpg'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello! I'm
        </h5>
        <h1>Bhaskar Joshi</h1>
        <h5 className="text-light">
          B.Tech CS Undergraduate at IIIT Hyderabad !
        </h5>
        <CTA></CTA>
        <HeaderSocials/>

        <div className='me7'>
          <img src={ME7} alt="me7" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}
