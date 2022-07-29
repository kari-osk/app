import React from 'react'
import { Container } from 'react-bootstrap'
import Button from '../Button'

import './style.css'

function Contact() {
  return (
    <div id="contact">
      <Container className="contact_container">
        <h1 className="contact_h1">Contact</h1>
        <div className='contact_text'>
          <h2 className="contact_h2">Let´s work together on your next project</h2>
          <a
            href='http://www.linkedin.com/in/karinaosuka' target='_blank'
            rel='noreferrer'
          >
            <Button text='in/karinaosuka' />
          </a>
        </div>
      </Container>
    </div>
  )
}

export default Contact