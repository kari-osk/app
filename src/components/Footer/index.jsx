import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

import './style.css'

function Footer() {
  return (
    <div id="footer">
      <Container>
        <Col className="footer_row">
          <h6 className='footer_h6'>© Personal portfolio - Karina Osuka</h6>
          <div>
            <a
              className='footer_icon'
              href='http://www.linkedin.com/in/karinaosuka' target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin />
            </a>
            <a
              className='footer_icon'
              href='https://github.com/kari-osk' target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
          </div>
        </Col>
      </Container>

    </div>
  )
}

export default Footer