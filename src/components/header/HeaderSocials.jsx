import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jayson-herrera-5964ab26a/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/jayson182005" rel="noreferrer" target='_blank'><BsGithub/></a>
        <a href="https://www.facebook.com/jayson.herrera.3344" rel="noreferrer" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/jayson182005/" rel="noreferrer" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials