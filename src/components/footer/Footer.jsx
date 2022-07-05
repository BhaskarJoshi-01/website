import React from 'react'
import './footer.css'
import { FiLinkedin } from 'react-icons/fi'
import { DiGithubAlt } from 'react-icons/di'
import { FiFacebook } from 'react-icons/fi'
import { BsSuitHeartFill } from 'react-icons/bs'
import { SiCodeforces } from 'react-icons/si'
import { SiLeetcode } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#testimonials">Photo Gallery</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/BhaskarJoshi-01" target="_blank"><DiGithubAlt /></a>
        <a href="https://www.linkedin.com/in/bhaskar-joshi-968a591a4/" target="_blank"><FiLinkedin /></a>
        <a href="https://www.facebook.com/bhaskar.joshi.1426/" target="_blank"><FiFacebook></FiFacebook></a>
        <a href="https://codeforces.com/profile/stack_overflows"><SiCodeforces /></a>
        <a href="https://leetcode.com/bhaskarjoshi2001/"><SiLeetcode /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Made with <BsSuitHeartFill /> by Bhaskar Joshi</small>
      </div>
    </footer>
  )
}
