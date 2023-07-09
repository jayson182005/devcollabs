import React, {useRef} from 'react'
import './contact.css'
import {MdOutgoingMail} from 'react-icons/md'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {TfiInstagram} from 'react-icons/tfi'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // let myUsername = document.getElementById('name').value;
    // console.log(myUsername);

    emailjs.sendForm('service_op91dsp', 'template_m2eob9w', form.current, 'KiPWnf6V6X1gMcwyz')

    e.target.reset()
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutgoingMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>herrerajv.dev@gmail.com</h5>
            <a href="mailto:herrerajv.dev@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>herrerajv.dev@gmail.com</h5>
            <a href="https://m.me/jayson.herrera.3344">Send a message</a>
          </article>
          <article className="contact__option">
            <TfiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>herrerajv.dev@gmail.com</h5>
            <a href="https://www.instagram.com/jayson182005/">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' id='name' placeholder='Yout Full Name' required/>
          <input type="email" name='email' id='email' placeholder='your Email' required />
          <textarea name="message" rows="7" id='message' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact