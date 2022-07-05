import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaBook } from 'react-icons/fa'
import { MdPermContactCalendar } from 'react-icons/md'
import { useState } from 'react'
import {IoIosImages} from 'react-icons/io'
export const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome></AiOutlineHome></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><CgProfile /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
        <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><IoIosImages /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar /></a>

      </nav></>
  )
}

// const Nav = () => {

//   const [activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome></AiOutlineHome></a>
//       <a href="#about"><CgProfile /></a>
//       <a href="#experience"><FaBook /></a>
//       <a href="#contact"><MdPermContactCalendar /></a>

//     </nav> )

// }
// export default Nav