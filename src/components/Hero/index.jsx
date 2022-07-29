import React from 'react'
import { Container } from 'react-bootstrap'

import './style.css'

function Hero() {
  return (
    <div className='hero_container' id="hero">
      <Container>
        <h3 className='hero_h3'>Hello, my name is Karina</h3>
        <h1 className='hero_h1'>I'm a Front-end developer</h1>
      </Container>
    </div>
  )
}

export default Hero