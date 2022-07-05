import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {DiGithubAlt} from 'react-icons/di'
import {FiFacebook} from 'react-icons/fi'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://github.com/BhaskarJoshi-01" target="_blank"><DiGithubAlt/></a>
    <a href="https://www.linkedin.com/in/bhaskar-joshi-968a591a4/" target="_blank"><FiLinkedin/></a>
    <a href="https://www.facebook.com/bhaskar.joshi.1426/" target="_blank"><FiFacebook></FiFacebook></a>
    {/* <a href="" target="_blank"></a> */}

    </div>
  )
}
