import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              
                <BsFillCheckCircleFill className='service__list-icon'/>
            
              <p>Developing and conceptualizing a comprehensive UI/UX design strategy for the brand.</p>
            </li>
            <li>
            
              <BsFillCheckCircleFill className='service__list-icon'/>
            
              <p>Producing high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Testing UI elements such as CTAs, banners, page layouts, page designs, page flows, and target links for landing pages.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Adhering to style standards on typography and graphic design.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Research industry-related topics</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Prepare well-structured drafts using digital publishing platforms</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Create and distribute marketing copy to advertise our company and products</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Interview industry professionals and incorporate their views in blog posts</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Conduct keyword research and use SEO guidelines to optimize content</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Writing well designed, testable, efficient code by using best software development practices</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Creating website layout/user interfaces by using standard HTML/CSS practices</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Integrating data from various back-end services and databases</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Gather and refine specifications and requirements based on technical needs</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Be responsible for maintaining, expanding, and scaling our site</p>
            </li>
          </ul>
        </article>
      </div>
      </section>
  )
}
 
export default Services