import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/header.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jayson Herrera</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="photo">
          <img src={ME} alt=""/>
          <div class="glow-wrap">
            <i class="glow"></i>
          </div>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header