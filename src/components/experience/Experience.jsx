import React from 'react'
import './experience.css'
import {FaHtml5, FaWordpress, FaCss3Alt, FaBootstrap, FaLaravel, FaNodeJs} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {RiReactjsLine} from 'react-icons/ri'
import {SiPhp, SiMysql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__Frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCss3Alt className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <TbBrandJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <RiReactjsLine className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap 5</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaWordpress className='experience__details-icon' />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaLaravel className='experience__details-icon' />
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
             
            <article className="experience__details">
              <SiMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience