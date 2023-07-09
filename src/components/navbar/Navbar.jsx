import React from 'react'
import './navbar.css'
import {AiOutlineHome, AiOutlineUser,} from 'react-icons/ai'
import {LiaBookSolid} from 'react-icons/lia'
import {RiMessage2Line, RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LiaBookSolid/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line/></a>
      
    </nav>
  )
}
 
export default Navbar